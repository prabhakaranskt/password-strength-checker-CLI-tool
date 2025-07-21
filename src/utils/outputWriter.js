import fs from 'fs/promises';

export default async function writeOutput(filePath, results) {
  const content = results.map(res =>
    `Password: ${res.password}\nStrength: ${res.strength}\nDictionary Match: ${res.dictCheck}\nHash Match: ${res.hashMatch}\n---`
  ).join('\n');

  await fs.writeFile(filePath, content, 'utf-8');
}
