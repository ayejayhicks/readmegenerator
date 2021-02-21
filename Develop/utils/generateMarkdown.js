// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(reply) {
  return `# README Generator ${reply.title}
  ![License](https://img.shields.io/badge/License-${reply.license}-red)

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Questions](#username)
  * [Contributers](#contributers)
  * [License](#license)

  ## Description
  ${reply.description}
  
  ## Installation
  ${reply.installation}
  
  ## Usage
  ${reply.usage}
  
  ## Tests
  ${reply.tests}
  
  ## Questions
  Please see my GitHub page here:
  - [GitHub](https://github.com/${reply.username})

  or send me an email: ${reply.email}

  ## Contributers
  ${reply.contributers}
 
  
  ## License
  ![License](https://img.shields.io/badge/License-${reply.license}-red)`;
}

module.exports = generateMarkdown;