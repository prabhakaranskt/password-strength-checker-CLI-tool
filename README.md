🔐 Password Strength Checker CLI Tool
A feature-rich command-line tool built using JavaScript (Node.js) to analyze and validate passwords using various methods including dictionary checks and brute-force. Supports file input/output and hashing validation with progress bar support.

📦 Features
✅ Check passwords using a dictionary wordlist (-d)

🔁 Brute-force password cracking simulation (-b)

📂 Input password list from file (-l input.txt)

📄 Output results to a file (-o output.txt)

🔎 Check a single hashed password (-i <hash>)

🔤 Use your own dictionary wordlist file (-w wordlist.txt)

📊 Command-line progress bar for visual feedback

🛠 Requirements
Node.js v18 or above (v22 recommended)

Enable ES Modules (already enabled by using .mjs or "type": "module" in package.json)

📦 Installation:
git clone https://github.com/prabhakaranskt/password-strength-checker-CLI-tool.git
cd password-strength-checker-CLI-tool
npm install


Usage:
🔍 1. Dictionary Check Mode
bash

node src/cli.js -d -l input.txt -w wordlist/common-passwords.txt -o output.txt

Checks each password in input.txt against the dictionary wordlist.

Outputs results to output.txt.

🧠 2. Bruteforce Simulation Mode
bash
node src/cli.js -b -l input.txt -o output.txt

Simulates brute-force cracking (time-based, not real cracking).

Output written to output.txt.

🔐 3. Hash Check Mode
bash
node src/cli.js -i <hashed_password> -w wordlist/common-passwords.txt

Verifies if the hashed password exists in your wordlist.

