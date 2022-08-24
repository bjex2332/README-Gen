const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of the project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install the required software?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use your program?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Do you have any contributions to mention?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your Github link?',
        name: 'github',
    },
    {
        type: 'list',
        message: 'Which license did you use?',
        name: 'license',
        choices: ['MIT', 'ISC', 'Apache', 'GPL', 'BSD3']
    }

]

function createReadMe(input) {
    fs.writeFile('README.md', input, (error) =>
        error ? console.error(error) : console.log('File Saved'));
};

function turnIntoMarkdown() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const input = markdown(answers);
            console.log(input);
            createReadMe(input);
            
            
        })
}
turnIntoMarkdown();


