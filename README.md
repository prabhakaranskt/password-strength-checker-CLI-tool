# 🔐 Password Strength Checker CLI Tool

A feature-rich command-line tool built using **JavaScript (Node.js)** to analyze and validate passwords using various methods including dictionary checks, brute-force simulation, hashing, file input/output, and live progress bars.

---

## ⚙️ Tech Stack

- Language: **Node.js (ES Modules)**

---

## ✨ Features

- ✅ Check password strength with scoring
- 📖 Check passwords using a **dictionary wordlist** (`-d`)
- 🧠 Brute-force password cracking simulation (`-b`)
- 📂 Input passwords from a file (`-l input.txt`)
- 📝 Save output results to a file (`-o output.txt`)
- 🔐 Check a single **hashed password** (`-i <hash>`)
- 🧾 Use a **custom dictionary wordlist** (`-w wordlist.txt`)
- 📊 **Command-line progress bar** for long-running operations

---

## 🧰 Requirements

- Node.js **v18+** (recommended: v20+)
- `"type": "module"` must be set in `package.json` to use ES modules

---

## 📦 Installation

```bash
git clone https://github.com/prabhakaranskt/password-strength-checker-CLI-tool.git
cd password-strength-checker-CLI-tool
npm install
```


Usage:

1. Check a Single Password
    ```bash
    node src/cli.js -p "YOUR PASSWORD"
```

2. Dictionary Check Mode
    ```bash
    node src/cli.js -d -w wordlist.txt --password 'YOUR PASSWORD'
```

3. Bruteforce Simulation Mode
    ```bash
    node src/cli.js -b -p 'YOUR PASSWORD'
```

4. Hash Check Mode

    ```bash
    node src/cli.js -i -p 'YOUR PASSWORD'
```

5. Test Input File & Output File
    ```bash
    node src/cli.js -l input.txt -o output.txt
```