import fs from 'fs/promises';
import crypto from 'crypto';

export default async function checkHash(password, filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const hashes = data.split(/\r?\n/).map(line => line.trim());
    const passwordHash = crypto.createHash('md5').update(password).digest('hex');

    for (const hash of hashes) {
      if (hash === passwordHash) {
        return { matched: true, matchedHash: hash };
      }
    }
    return { matched: false };
  } catch (err) {
    console.error(`Error reading hash file: ${err.message}`);
    return { matched: false };
  }
}
