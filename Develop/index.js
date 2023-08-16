// TODO: Include packages needed for this applicationconst 
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description?',
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'Installation instructions?',
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'Usage information?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'Test instructions?',
    },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
