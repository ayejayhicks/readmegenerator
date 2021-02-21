// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

// const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
// function init() {
//     console.log("Start");
//     console.log("Your README is attached!");

inquirer
    .prompt([
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
            message: "What is your project license?"
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
        }
    ])

// Function call to initialize app
.then(response => {
        console.log(response);
        fs.writeFile("newREADME.md", generateMarkdown(response), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });
    });

