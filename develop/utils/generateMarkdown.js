
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badge = {
        MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
        ISC: '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)',
        Apache: '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
        GPL: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
        BSD3: '![License: BSD3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
    }
    return badge[license]
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const link = {
        MIT: '(https://opensource.org/licenses/MIT)',
        ISC: '(https://opensource.org/licenses/ISC)',
        Apache: '(https://opensource.org/licenses/Apache-2.0)',
        GPL: '(https://www.gnu.org/licenses/gpl-3.0)',
        BSD3: '(https://opensource.org/licenses/BSD-3-Clause)'
    }
    return link[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return `This is licensed under the ${renderLicenseLink(license)} license.`
    }
    else {
        return ' ';
    }

}

// TODO: Create a function to generate markdown for README
const generateMarkdown = answers => {
    return `
    
# ${answers.title}

${renderLicenseBadge(answers.license)}

## Table of Contents
- [Project Description](#Description)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Installation](#Installation)
- [Email](#Email)
- [Github](#Github)
- [License](#License)

## Description
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}

## Contribution
${answers.contribution}

## Email
${answers.email}

## Github
${answers.github}

## License
${renderLicenseSection(answers.license)}
    `
}

module.exports = generateMarkdown;
