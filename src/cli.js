#!/usr/bin/env node

import yargs from 'yargs';
import {hideBin } from 'yargs/helpers';
import chalk from 'chalk';

import loadWeakPasswords from './loadWeakPasswords.js';
import analyzePassword from './analyzePassword.js';

export const cli = async () => {
    
    const argv = yargs(hideBin(process.argv))
        .option('password', {
            alias: 'p',
            type: 'string',
            description: 'Password to Check',
            demandOption: true,
        })
        .help().argv;

        const weakPasswords = await loadWeakPasswords();

        const password = argv.password;

        const result = analyzePassword(password,weakPasswords);

        console.log(chalk.blue('Password: ') + password);

        if (result.isCommon) {
            console.log(chalk.red('Found in Common/weak password list!'));
        }

        switch(result.strength) {
            case 'Very Weak':
                console.log(chalk.bgRed('Strength: VERY WEAK'));
                break;
            case 'Weak':
                console.log(chalk.red('Strength: WEAK'));
                break;
            case 'Medium':
                console.log(chalk.yellow('Strength: MEDIUM'));
                break;
            case 'Strong':
                console.log(chalk.green('Strength: STRONG'));
                break;
            default:
                console.log(chalk.gray('Unknown strength level'));
        }
}

cli().catch(err => {
    console.log(chalk.red('ERROR: '), err);
    process.exit(1);
});

