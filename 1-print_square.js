#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/


if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1);
}

// Parse the size argument as an integer
const size = parseInt(process.argv[2]);

//Check if the size is a valid positive integer
if (isNaN(size) || size <= 0) {
    process.stderr.write("Invalid size argument. Please provide a positive integer.\n");
    process.exit(1); // exit with and error code
}

for (let i = 0 ; i < size ; i ++) {
    let line ="";
    for (let j = 0; j < size; j++) {
        line += "#";
    }
    console.log(line);
}
