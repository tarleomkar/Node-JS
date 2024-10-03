const fs = require('fs');

// Step 1: Write to a file
fs.writeFile('example.txt', 'Initial content.', (err) => {
  if (err) throw err;
  console.log('File written successfully.');

  // Step 2: Append data to the file
  fs.appendFile('example.txt', '\nAppended content.', (err) => {
    if (err) throw err;
    console.log('Content appended successfully.');

    // Step 3: Rename the file
    fs.rename('example.txt', 'newfile.txt', (err) => {
      if (err) throw err;
      console.log('File renamed successfully.');

      // Step 4: Read the renamed file
      fs.readFile('newfile.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:\n', data);

        // Step 5: Delete the file
        fs.unlink('newfile.txt', (err) => {
          if (err) throw err;
          console.log('File deleted successfully.');
        });
      });
    });
  });
});
