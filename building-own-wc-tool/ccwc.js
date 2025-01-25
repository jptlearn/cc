#!/usr/bin/env node

const fs = require("fs");

// Check if the correct arguments are provided
if (process.argv.length < 4 || process.argv[2] !== "-c") {
  console.error("Usage: ccwc -c <filename>");
  process.exit(1);
}

// Extract the filename from the command-line arguments
const filename = process.argv[3];

// Read the file and count bytes
fs.readFile(filename, (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    process.exit(1);
  }

  // Output the byte count
  console.log(data.length); // .length gives the number of bytes in the file
});
