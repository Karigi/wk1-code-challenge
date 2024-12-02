//Declairing the method for prompting the user to input data
const readline = require('readline'); 
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


const speedLimit = 70; // sets car speed limit
//carSpeed function that takes in the user input as an argument
function carSpeed(theSpeed){ 
    speed = parseFloat(theSpeed); // checking if the user input is a numeric value
    //checking if the user input is a valid speed value
    if (isNaN(speed) || speed < 0){
        console.log(`'${theSpeed}' is invalid. Enter a valid speed`);
    }
    // if speed limit is below 70, its OK
    else if (speed <= speedLimit){
        console.log("OK");
    } else {
        let difference; //stores the difference of the speed and speed limit
        let demerit; //stores the demerit points
        difference = speed-speedLimit; // difference of the speed and speed limit
        demerit = Math.round(difference/5); // rounds of the demerit point for a whole number point
        console.log(`Demerit points: ${demerit}`);
        if (demerit > 12){
            console.log("License suspended");
        }
    }
}

//prompting for user input
rl.question("Enter speed: ", (input) =>{
    carSpeed(input); // passing the input as an argument to the carSpeed function
    rl.close(); //closing input prompt
})