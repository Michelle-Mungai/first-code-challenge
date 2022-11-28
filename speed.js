//Speed variables declared

const checkSpeed = (speed) => {
    const speedLimit = 70;
    const kmPerPoint = 5;

if (speed < speedLimit){
    console.log ("Ok")
} 

//Calculate if their license is suspended

const points = Math.floor((speed - speedLimit)  / kmPerPoint);
if (points >= 12)
console.log("License suspended");
// Return drivers points

else console.log("Points:", points);
}

checkSpeed(300);