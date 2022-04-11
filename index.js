// TODO: Include packages needed for this application
 const fs = require("fs");
 const inquirer = require('inquirer')

 const questions = [
    {
        type: 'list', message: "What type of license?", name: 'license', choices: [
            'MIT',
            'Apache',
            'GPL',
        ]
    },
    
    {
     type: 'list', message: "Pick the framework you are using", name: 'framework', choices: [
         'react',
         'react-native',
         'node',
     ]
 }
];

 
 // TODO: Create an array of questions for user input
 
 // TODO: Create a function to write README file
 function writeToFile(fileName, data) {
    const markdown = JSON.stringify(data)
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
