import inquirer from "inquirer"

const answers : {
    Sentence : string
} = await inquirer.prompt (

    {
        name : "Sentence",
        type : "input",
        message : "Enter your sentence to count the world :"
     
    })

    const words = answers.Sentence.trim().split("")

console.log (words)


console.log(`your sentence word count is ${words.length}`);