#!/usr/bin/env node
import fs from 'node:fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';
import analyzePassword from './utils/Password-strength-checker/analyzePassword.js';
import loadWeakPasswords from './utils/Password-strength-checker/loadWeakPasswords.js';
import dictionaryCheck from './utils/dictionaryCheck.js';
import bruteForce  from './utils/bruteforce.js';
import checkHash from './utils/hashmatch.js';
import processInputFile from './utils/inputFileProcessor.js';
import writeOutput from './utils/outputWriter.js';
import { drawProgressBar } from './utils/progressBar.js';



const argv = yargs(hideBin(process.argv))
  .option('password', { alias: 'p', type: 'string', description: 'Password to check' })
  .option('dictionary', { alias: 'd', type: 'boolean', description: 'Enable dictionary check' })
  .option('wordlist', { alias: 'w', type: 'string', description: 'Path to wordlist file' })
  .option('output', { alias: 'o', type: 'string', description: 'Output results to file' })
  .option('input', { alias: 'l', type: 'string', description: 'Input file containing passwords' })
  .option('hash', { alias: 'i', type: 'string', description: 'Check hash match from file' })
  .option('brute', { alias: 'b', type: 'boolean', description: 'Enable brute-force method' })
  .help().argv;

(async () => {

  
  // Example: Simulate processing a list of passwords
  const passwords = fs.readFileSync('input.txt', 'utf-8').split('\n');
  const total = passwords.length;

  console.log("Processing input file...");
  passwords.forEach((pass, index) => {
      // analyzePassword(pass); // your logic here
      drawProgressBar(index + 1, total);
  });


  const weakPasswords = await loadWeakPasswords();
  let results = [];


  // Single password
  if (argv.password) {
    const analysis = analyzePassword(argv.password, weakPasswords);
    const dictCheck = argv.d && argv.wordlist ? await dictionaryCheck(argv.password, argv.wordlist) : false;
    const hashMatch = argv.i ? await checkHash(argv.password, argv.i) : false;

    results.push({ password: argv.password, ...analysis, dictCheck, hashMatch });

    if (argv.brute) {
      await bruteForce(argv.password);
    }
  }

  // Input file
  if (argv.input) {
    const fileResults = await processInputFile(argv.input, weakPasswords, argv);
    results = results.concat(fileResults);
  }

  // Output to file
  if (argv.output) {
    await writeOutput(argv.output, results);
  }

  // Console output
  results.forEach(res => {
    console.log(chalk.blue('Password:'), res.password);
    console.log('Strength:', chalk.green(res.strength));
    if (res.dictCheck) console.log(chalk.red('⚠ Found in dictionary!'));
    if (res.hashMatch) console.log(chalk.red('⚠ Hash matched!'));
    console.log('---');
  });
})();
