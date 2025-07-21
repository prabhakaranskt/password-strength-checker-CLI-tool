import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function  loadWeakPasswords () {
  const data = await fs.readFile(path.join(__dirname, '../../../weak-passwords.txt'),'utf-8');

  return data.split('\n').map(pw => pw.trim());

}

