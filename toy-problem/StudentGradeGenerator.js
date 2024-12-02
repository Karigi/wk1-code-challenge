//Declairing the method for prompting the user to input data
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function grading(marks){
    studentGrade = parseFloat(marks); // checking if user input is a mumeric value
    //checking if user input is valid and is between 0 and 100
    if (isNaN(studentGrade) || studentGrade < 0 || studentGrade > 100){
        console.log(`'${marks}' is invalid. Enter grade (0-100)`);
    }
    else if (marks > 79){
        console.log("Grade: A");
    } 
    else if (marks >= 60 && marks <= 79){
        console.log("Grade: B");
    }
    else if (marks > 49 && marks <= 59){
        console.log("Grade: C");
    }
    else if (marks  >= 40 && marks <= 49){
        console.log("Grade: D");
    }
    else{
        console.log("Grade: E");
    }
}

//function for looping so that the user will be prompted to enter marks until they type in enter to terminate the program
function promptUser() {
    rl.question("Enter student's marks (0-100) or type 'exit' to quit: ", (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log("Exiting the program.");
            rl.close(); //closing input prompt
        } else {
            grading(input); 
            promptUser(); // calling itself to loop
        }
    });
}
promptUser();

