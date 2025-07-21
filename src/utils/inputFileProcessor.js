import fs from 'fs/promises';
import analyzePassword from './Password-strength-checker/analyzePassword.js';
import dictionaryCheck from './dictionaryCheck.js';
import checkHash from './hashmatch.js';

export default async function processInputFile(filePath, weakPasswords, options) {
  const content = await fs.readFile(filePath, 'utf-8');
  const lines = content.split('\n').map(p => p.trim());

  const results = [];

  for (const pw of lines) {
    const analysis = analyzePassword(pw, weakPasswords);
    const dictCheck = options.d && options.wordlist ? await dictionaryCheck(pw, options.wordlist) : false;
    const hashMatch = options.i ? await checkHash(pw, options.i) : false;

    results.push({ password: pw, ...analysis, dictCheck, hashMatch });
  }

  return results;
}
