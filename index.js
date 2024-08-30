
import inquirer from "inquirer";
import fs from "fs";

const questions = [
    {
        type: "input",
        message : "Project Title : ",
        name: "title"
    },
    {
        type: "input",
        message : "Description : ",
        name: "description"
    },

    {
        type: "input",
        message : "Installation InstructionsDescription : ",
        name: "installation"
    },
    {
        type: "input",
        message : "Usage Information : ",
        name: "usage"
    },
    {
        type: "input",
        message : "Contribution Guidelines : ",
        name: "contribution"
    },
    {
        type: "input",
        message : "Test Instructions : ",
        name: "test"
    },
    
    {
        type: "list",
        message : "Choose a License : ",
        name: "license",
        choices: ["MIT","GNU","Apache 2.0","BSD","MPL-2.0","None"]
    },
    {
        type: "input",
        message : "GitHub UserName : ",
        name: "github"
    },
    {
        type: "input",
        message : "E-mail : ",
        name: "eMail"
    }
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err)=>{
        err? console.error(err):console.log("Success!")
    })
}


function init() {
    inquirer
    .prompt(questions)
    .then((response)=>{  
        let data = `# ${response.title}
        writeToFile("README.md",data)
    })
}git


init();