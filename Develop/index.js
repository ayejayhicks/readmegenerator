// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// inquirer
//     .prompt
function promptUser() {
    return inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What is your project title?",
        },
        {
            name: "description",
            type: "input",
            message: "Please write a short description of your project:"
        },
        {
            name: "installation",
            type: "input",
            message: "Please provide installation instructions:"
        },
        {
            name: "usage",
            type: "input",
            message: "Please provide usage information:"
        },
        {
            name: "contributers",
            type: "input",
            message: "Who were the contributers to this project?"
        },
        {
            name: "test",
            type: "input",
            message: "What are your test instructions?",
        },
        {
            name: "license",
            type: "list",
            choices: ["MIT", "Apache", "GPL", "None"],
            message: "What license did you use?"
        },
        {
            name: "github",
            type: "input",
            message: "What is your Github username:"
        },
        {
            name: "email",
            type: "input",
            message: "What is your email address?",
        }
    ]);
}

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(README.md, markdown) { }
promptUser().then(response) => {
    console.log(response);
    console.log(response.title);
    console.log(response.description);
    console.log(response.installation);
    console.log(response.usage);
    console.log(response.contributors);
    console.log(response.test);
    console.log(response.license);
    console.log(response.github);
    console.log(response.email):
})

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

// .then((response)) =>
// fs.writeFile



// ${ response.   }

