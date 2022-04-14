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

function screenshotsSection(screenshots){
    if (!screenshots){
        return ""
    }
    const array = screenshots.split(" ");
    let res = "";
    for (let i=0;i<array.length;i++){
        res+=`
![Screenshot ${i}](${array[i]} "Screenshot")
        
`
    }
    return res;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const licenseLink = renderLicenseBadge(license);
    if (!licenseLink) return "";
    return `
## License

This app is covered by the ${license} license. For more information, visit ${licenseLink.licenseURL}.
`
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
- [Features](#features)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

${screenshotsSection(data.screenshots)}

## Credits

Collaborators
- ${data.collaborators}

Third Party Assets
- ${data.thirdPartyAssets}

Tutorials
- ${data.tutorials}

## Features

- ${data.features}

## How to Contribute

${data.contribute}
  
## Tests

${data.tests}

## Questions

Any questions? Contact me at:
- E-mail: ${data.email}
- GitHub: ${data.github}
- Other means: ${data.otherContacts}

${licenseSection}
`;
}

module.exports = generateMarkdown;
