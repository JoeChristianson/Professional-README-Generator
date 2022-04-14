// TODO: Include packages needed for this application
 const fs = require("fs");
 const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

 const questions = [
     {
      type: 'input', message: "What is this project's title?", name: 'title', 
  },
  {
    type: 'input', message: "Describe the what, why and how briefly of your project", name: 'description', 
},
{
    type: 'input', message: "Describe what steps are needed for installation.", name: 'installation', 
},
{
    type: 'input', message: "What are some examples of usage?", name: 'usage', 
},
{
    type: 'input', message: "Add Screenshots, separate by spaces", name: 'screenshots', 
},
{
    type: 'input', message: "Are their any other collaborators? Link their github profiles.", name: 'collaborators', 
},
{
    type: 'input', message: "Did you use any third party assets?", name: 'thirdPartyAssets', 
},
{
    type: 'input', message: "Do you have any links to tutorials you used?", name: 'tutorials', 
},
{
    type: 'list', message: "What type of license?", name: 'license', choices: [
        'MIT',
        'Apache',
        'GPL',
        'none specified',
    ]
},
{
    type: 'input', message: "List the apps features", name: 'features', 
},
{
    type: 'input', message: "List tests that can be run", name: 'tests', 
},
{
    type: 'input', message: "How to contribute?", name: 'contribute', 
},
{
    type: 'input', message: "What is your e-mail?", name: 'email', 
},
{
    type: 'input', message: "What is your github link?", name: 'tests', 
},
];

 
 // TODO: Create an array of questions for user input
 
 // TODO: Create a function to write README file
 function writeToFile(fileName, data) {
    
    const markdown = generateMarkdown(data)
    fs.writeFile(fileName,markdown,err=>{
        err?console.log(err):console.log("Success")
    })
}

// TODO: Create a function to initialize app
async function init() {
    const ans = await inquirer.prompt(questions);
    console.log(ans)
    writeToFile("README.md",ans)
}

// Function call to initialize app
init();
