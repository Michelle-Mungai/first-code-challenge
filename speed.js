//Challenge 2: Speed Detector (Toy Problem)
const speedDetector = require('prompt-sync');
const prompt = speedDetector();
// speedMonitor function that uses else-if statements to determine speed limits
function speedMonitor(){
    // Ask user for input
    let speed = prompt("Ask for speed?");
    if (speed <= 70){
        console.log("Ok");
    }
    else if(speed > 70 && speed <= 130){
        let demeritPoint = (speed-70)/5;
        console.log(`Points: ${demeritPoint}`);
    }
    else{
        console.log("License suspended")
    }
}
// Call the speedMonitor function
speedMonitor();