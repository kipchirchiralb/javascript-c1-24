const fs = require("fs");

// Array of student names
const students = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Function to congratulate each student and create text files
function congratulateStudents() {
  const milestone = "mastering JavaScript fundamentals";
  students.forEach((student) => {
    const congratulationMessage = `Congratulations, ${student}! You have reached the milestone of ${milestone}. Keep up the good work!`;
    const fileName = `${student}_congratulations.txt`;
    fs.writeFile(fileName, congratulationMessage, (err) => {
      if (err) throw err;
      console.log(`${fileName} has been created successfully!`);
    });
  });
}

// Call the function to congratulate students and create text files
congratulateStudents();

// node
