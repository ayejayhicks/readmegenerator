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
  return `
  # ${reply.title}

  *[Project Description](#description)

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Questions](#questions)
  * [Contributers](#contributers)
  * [License](#license)

  ${reply.title}

  # Description
  ${reply.description}
  
  # Contents
  ${reply.contents}
  
  #Installation
  ${reply.installation}
  
  # Usage
  ${reply.usage}
  
  ${reply.test}
  
  ${reply.license}
  
  ${reply.github}
  
  ${reply.email}
  
  ${reply.contributers}`;
}

module.exports = generateMarkdown;
