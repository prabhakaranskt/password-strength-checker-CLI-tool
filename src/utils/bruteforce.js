import { createSpinner } from 'nanospinner';

export default async function bruteForce(password) {
  const spinner = createSpinner('Brute-forcing password...').start();
  await new Promise(resolve => setTimeout(resolve, 1500)); // simulate delay
  spinner.success({ text: `Password brute-force completed (simulated)` });
}

