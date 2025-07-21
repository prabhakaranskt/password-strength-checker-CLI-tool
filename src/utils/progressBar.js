import readline from 'node:readline';
/**
 * Draws a progress bar in the terminal.
 * @param {number} current - Current progress (0 to total)
 * @param {number} total - Total number of steps
 */
export function drawProgressBar(current, total) {
    const percent = Math.floor((current / total) * 100);
    const barLength = 30; // Length of bar in characters
    const filledLength = Math.floor((barLength * percent) / 100);

    const bar = '█'.repeat(filledLength) + '-'.repeat(barLength - filledLength);

    readline.cursorTo(process.stdout, 0);
    process.stdout.write(`[${bar}] ${percent}%`);
    if (current === total) {
        process.stdout.write('\n');
    }
}

/**
 * Simulates a progress bar (optional usage for demo).
 */
export function simulateProgressBar(total = 100, speed = 20) {
    let current = 0;
    const interval = setInterval(() => {
        if (current > total) {
            clearInterval(interval);
        } else {
            drawProgressBar(current, total);
            current++;
        }
    }, speed);
}

