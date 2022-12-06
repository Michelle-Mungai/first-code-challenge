//Prompt student marks
const grade = require('prompt-sync')
const prompt = grade()

let grades = prompt ("Enter your marks:");

// Calculate students grades

if (grades > 79 && grades <= 100){
    console.log ("A");
}else if (grades >= 60 && grades <= 79){
    console.log ("B");
}else if (grades >=49 && grades <=59){
    console.log ("C");
} else if (grades >=40 && grades < 49){
    console.log ("D-");
}else{
    console.log ("E");
}

