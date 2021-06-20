const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); 

        
const promptUser = () => {

    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if(titleInput) {
                return true;
            }else {
                console.log('Please enter the name of your title!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of the project.',
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            }else {
                console.log('Please enter a description of you project!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Give a brief description on how to install the project.',
        validate: installationInput => {
            if(installationInput) {
                return true;
            }else {
                console.log('Please enter a description on how to install your project!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: usageInput => {
            if(usageInput) {
                return true;
            }else {
                console.log('Please enter instructions on using your project!')
                return false
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license are you using?',
        choices:['MIT', 'Apache-2.0', 'EPL-2.0', 'BSD-3-Clause']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Describe the contribution guidelines.',
        validate: contributionInput => {
            if(contributionInput) {
                return true;
            }else {
                console.log('Please enter contribution guidelines!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'give a set of instructions for testing.',
        validate: testInput => {
            if(testInput) {
                return true;
            }else {
                console.log('Please enter instuctions for testing!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter Github username for contact purposes.',
        validate: githubInput => {
            if(githubInput) {
                return true;
            }else {
                console.log('Please enter your github username!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide a e-mail for contact purposes.'
    },
    {
        type: 'input',
        name: 'contactInstructions',
        message: 'Give a set of instructions for the best way to contact you.',
        validate: contactInput => {
            if(contactInput) {
                return true;
            }else {
                console.log('Please enter instructions for contacting you!')
                return false
            }
        }
    }

])
};


const writeFile = fileTemplete => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileTemplete, err => {
        if(err) {
            reject(err);
            return;
        }

        resolve({
            ok: true,
            message: 'File Created'
        });
    });
    });
    // create table of contents for each section
};

// TODO: Create a function to initialize app
function init() {
    promptUser().
       then(promptData => {
           return generateMarkdown(promptData);
       }).
       then(fileTemplete => {
           return writeFile(fileTemplete);
       })
}

// Function call to initialize app
init();