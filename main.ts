#! /usr/bin/env node

// No 2 Table made by me
import chalk from "chalk";
function printMultiplicationTableOfTwo() {
    const multiplier = 2;
    for (let i = 1; i <= 10; i++) {
        console.log(chalk.bgCyanBright(`${multiplier} x ${i} = ${multiplier * i}`));
    }
}

printMultiplicationTableOfTwo();