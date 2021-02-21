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

  ## Table of Contents
  * [Description](#description)n
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Questions](#questions)
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
  ${reply.questions}

  ## Contributers
  ${reply.contributers}
  
  ## License
  ${reply.license}`;
}

module.exports = generateMarkdown;
