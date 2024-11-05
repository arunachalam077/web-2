const fs = require("fs");

fs.readFile('./a.txt', 'utf8', (err, data) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.error('Error: File not found!');
        } else {
            console.error('Error reading file:', err);
        }
        return;
    }

    // Clean up extra spaces
    const cleanedData = data.replace(/\s+/g, ' ').trim();

    // Write the cleaned data back to the file
    fs.writeFile("./a.txt", cleanedData, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log("File updated successfully!");
        }
    });
});
