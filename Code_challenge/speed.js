const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function speedDetector(speed) { // defines a function named speedDetector with a parameter speed.
    const speedLimit = 70;  // defines speed limit to be 70km/h.

    // The program checks a car's speed against a limit of 70 km/h. Returns 'ok' for speed below the limit.
    // calculates demerit points for speeds exceeding this limit based on increments of 5 km/h.
    // returns the number of points accumulated, or "License suspended" if points exceed 12.
    if (speed < speedLimit) {
        return "Ok";
    } else {
        const points = Math.floor((speed - speedLimit) / 5);
        if (points >= 12) {
            return "License suspended";
        } else {
            return "Points: " + points;
        }
    }
}

// Prompt the user for input
rl.question('Enter the speed of the car: ', (input) => {
    const speed = parseFloat(input);

    // Check if the input is a valid number
    if (isNaN(speed)) {
        console.log('Invalid input. Please enter a valid number.');
    } else {
        // Call the speedDetector function with the input speed
        const result = speedDetector(speed);
        console.log(result);
    }

    // Closing the readline interface
    rl.close();
});
