import fs from 'fs/promises';

export default async function dictionaryCheck(password, wordlistPath) {
  const content = await fs.readFile(wordlistPath, 'utf-8');
  const words = content.split('\n').map(w => w.trim());
  return words.includes(password);
}
