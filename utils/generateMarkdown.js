// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badges = {
      MIT: {badge:"https://img.shields.io/badge/License-MIT-yellow.svg",
    licenseURL:"https://opensource.org/licenses/Apache-2.0"
    },
    GPL: {badge:"https://img.shields.io/badge/License-GPLv3-blue.svg",
    licenseURL:"https://www.gnu.org/licenses/gpl-3.0"
    },
    Apache: {badge:"https://img.shields.io/badge/License-Apache_2.0-blue.svg",
    licenseURL:"https://opensource.org/licenses/Apache-2.0"
    },
  }
      return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseBadge = renderLicenseBadge(license);
  if (!licenseBadge) return "";
  return `
  [![License](${licenseBadge.badge})](${licenseBadge.licenseURL})
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const licenseLink = renderLicenseLink(license);
    if (!licenseLink) return "";
    return `
##License
${licenseLink}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const licenseSection = renderLicenseSection(data.license);
    const licenseLink = renderLicenseLink(data.license);

  return `# ${data.title}
  ${licenseLink}
## Description
${data.description}
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
  ${data.installation}

## Usage

  ${data.usage}

## Credits

  Collaborators
  - ${data.collaborators}

  Third Party Assets
  - ${data.thirdPartyAssets}

  Tutorials
  - ${data.tutorials}

## Features

  ${data.features}

## How to Contribute

  ${data.howToContribute}
  
## Tests

${data.tests}

${licenseSection}
`;
}

module.exports = generateMarkdown;
