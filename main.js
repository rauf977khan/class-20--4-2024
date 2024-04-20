import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "q1",
        message: "What is your name",
        type: "input"
    },
    {
        name: "q2",
        message: "What is your gender",
        type: "list",
        choices: ["male", "female"]
    }
]);
let myName = answer.q1;
console.log(`Hello ${answer.q1} how are you?and your gender is ${answer.q2}`);
