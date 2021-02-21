// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create a function to initialize app    
const questions = [
        {
            name: "title",
            type: "input",
            message: "What is your project title?"
        },
        {
            name: "description",
            type: "input",
            message: "What is a description of your project?"
        },
        {
            name: "contents",
            type: "input",
            message: "What is your table of contents?"
        },
        {
            name: "installation",
            type: "input",
            message: "What are your installation instructions?"
        },
        {
            name: "usage",
            type: "input",
            message: "What is your usage information?"
        },
        {
            name: "test",
            type: "input",
            message: "What are your test instructions?",
        },
        {
            name: "github",
            type: "input",
            message: "What is your Github username:"
        },
        {
            name: "email",
            type: "input",
            message: "What is your email address?"
        },
        {
            name: "license",
            type: "list",
            choices: ["MIT", "Apache", "GPL", "None"],
            message: "What is your project license?"
        },
        {
            name: "contributers",
            type: "input",
            message: "Who were the contributers to this project?"
        },
    ];

const writeFileAsync = util.promisify(fs.writeFile);

function init () {
    inquirer.prompt(questions).then((answers)=> {
        const README = generateMarkdown(answers);
        return writeFileAsync ("README.md", README)
    })
    .then (() => console.log("Success!"))
    .catch (err => console.error(err));
}

init();

