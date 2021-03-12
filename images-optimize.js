
import fs from "fs";
import { exec } from "child_process";

const configData  = JSON.parse(fs.readFileSync("./config.json", "utf8"));

const SIZES = configData.sizes;

let nextSizeIndex = 0;

function optimizeNextSize() {
  const size = SIZES[nextSizeIndex];

  console.log(`Optimizing images at size: ${size}`);

  // TRICKY: Use “size” as part of the path to avoid optimizing the “original” images
  exec(`imageoptim 'public/**/${size}*/*.jpg'`, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return;
    }

    // the *entire* stdout and stderr (buffered)
    if (stdout) console.log(stdout);
    if (stderr) console.log(stderr);

    nextSizeIndex++;
    if (nextSizeIndex < SIZES.length) {
      optimizeNextSize();
    }
  });
}


optimizeNextSize();

