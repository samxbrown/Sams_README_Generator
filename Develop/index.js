// TODO: Include packages needed for this applicationconst 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
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
        name: 'installation',
        message: 'Installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution guidelines?',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Licenses?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
    })
}

// Function call to initialize app
init();
