function speedDetector(speed){ //defines a function named speedDetector with a parameter speed. 
        const speedLimit = 70;  //defines speed limit to be 70km/h.

        //The program chhecks a car's speed against a limit of 70 km/h. Returns 'ok' for speed below the limit.
        //calculates demerit points for speeds exceeding this limit based on increments of 5 km/h.
        //returns the number of points accumulated, or "License suspended" if points exceed 12.
     if (speed < speedLimit) {
            return "Ok";
        } else {
            const points = Math.floor((speed - speedLimit)/5);
            if (points >= 12) {
                return "License suspended"
            } else {
                return "Points: " + points
            }
        }
    }
    
console.log(speedDetector(88))