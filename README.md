Password Strength Checker CLI Tool

    A feature-rich command-line tool built using JavaScript (Node.js) to analyze and validate passwords using various methods including dictionary checks and brute-force. Supports file input/output and hashing validation with progress bar support.

Tech Stack
    - Language: NodeJS

Features

-Check passwords using a dictionary wordlist (-d)
-Brute-force password cracking simulation (-b)
-Input password list from file (-l input.txt)
-Output results to a file (-o output.txt)
-Check a single hashed password (-i <hash>)
-Use your own dictionary wordlist file (-w wordlist.txt)
-Command-line progress bar for visual feedback

Requirements

Node.js v18 or above (v22 recommended)
Enable ES Modules (already enabled by using .mjs or "type": "module" in package.json)

Installation:

git clone https://github.com/prabhakaranskt/password-strength-checker-CLI-tool.git
cd password-strength-checker-CLI-tool
npm install


Usage:

1. Check a Single Password

    node src/cli.js -p "YOUR PASSWORD"


2. Dictionary Check Mode

    node src/cli.js -d -w wordlist.txt --password 'YOUR PASSWORD'

Checks each password in input.txt against the dictionary wordlist.


3. Bruteforce Simulation Mode

    node src/cli.js -b -p 'YOUR PASSWORD'

Simulates brute-force cracking (time-based, not real cracking).


4. Hash Check Mode

    node src/cli.js -i -p 'YOUR PASSWORD'

Verifies if the hashed password exists in your wordlist.

5. Test Input File & Output File

    node src/cli.js -l input.txt -o output.txt
