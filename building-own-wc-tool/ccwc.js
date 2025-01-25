#!/usr/bin/env node

const fs = require("fs");

// Validate arguments
if (process.argv.length < 4) {
  console.error("Usage: ccwc <option> <filename>");
  console.error("Options:");
  console.error("  -c   Count bytes");
  console.error("  -l   Count lines");
  console.error("  -w   Count words");
  console.error("  -m   Count characters");
  process.exit(1);
}

// Extract option and filename
const option = process.argv[2];
const filename = process.argv[3];

// Read the file
fs.readFile(filename, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    process.exit(1);
  }

  // Process based on the selected option
  switch (option) {
    case "-c": // Count bytes
      console.log(data.length); // .length gives the byte count
      break;
    case "-l": // Count lines
      console.log(data.split("\n").length); // Split by newline and count
      break;
    case "-w": // Count words
      console.log(data.split(/\s+/).filter(Boolean).length); // Split by whitespace and filter out empty entries
      break;
    case "-m": // Count characters
      console.log([...data].length); // Spread into an array to count characters (handles Unicode properly)
      break;
    default:
      console.error("Invalid option. Use -c, -l, -w, or -m.");
      process.exit(1);
  }
});
