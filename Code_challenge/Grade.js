const readline = require('readline');

// Creating an interface for reading and writing input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function studentGradeGenerator(marks){//  Defines a function  studentGradeGenerator with an argument 'marks'.
//The function `studentGradeGenerator` uses a series of `if-else` statements .
//They evaluate the value of `marks` and return the corresponding grade ('A', 'B', 'C', 'D', or 'E') based on predefined ranges.
    if (marks<40){
        return 'E';
    }else if(marks>40 && marks<50){
        return 'D';
    }else if (marks>=50 && marks<60){
        return 'C';
    }else if(marks>=60 && marks <79){
        return 'B';
    }else {
        return 'A';
    }
    
    }
    // Prompts the user to give input
rl.question("Enter the  marks: ", function(marks) {
    marks = parseInt(marks);

    // To check for valid input;
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log('Invalid input. Please enter a number between 0 and 100.');
    } else {
        
        const grade = studentGradeGenerator(marks);
        console.log(`Your grade is: ${grade}`);
    }

    // Close the readline interface;
    rl.close();
});
  