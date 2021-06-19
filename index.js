// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); 
        
// TODO: Create an array of questions for user input
const promptUser = () => {

    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
        // required
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of the project.'
        // required
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Give a brief description on how to install the application'
        // required
    },
    {
        type: 'confirm',
        name: 'usageConfirm',
        message: 'Do you want to include a screenshot with the usage section?',
        default: false
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use'
        // required
    },
    {
        type: 'confirm',
        name: 'license',
        message: 'Do you want to include a license?',
        default: false
    },
    {
        type: 'confirm',
        name: 'contributionConfirm',
        message: 'Do you want to add a contribution Section',
        default: false
    }
]).then((data) => {
    console.log(data);
});
}


// TODO: Create a function to write README file
function writeToFile() {
    // create table of contents for each section
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
// init();
promptUser()