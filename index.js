const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const idList = []
const teamMembers = []

const appMenu = () => {

    function buildTeam() {

    }

    function addIntern() {

    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineer id?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer email?"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineer Github?"
            }
        ]).then(answers =>{
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idList.push(answers.engineerId);
            console.log(engineer);
            createTeam();
        })
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Which type of team member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                ]
            }
        ]).then(userChoice => {
            if (userChoice.memberChoice === "Engineer") {
                addEngineer();
            } else if (userChoice.memberChoice === "Intern") {
                addIntern();
            } else {
                buildTeam();

            }
        })
    }

    function createManager() {
        console.log("Please build tam");
        inquirer.prompt([
            {
                type: "input",
                name: 'managerName',
                message: "What is the team manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter manager's name."
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's id?",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter manager's id."
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter manager's email."
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter manager's office number."
                }
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            console.log(manager);
            teamMembers.push(manager);
            idList.push(answers.managersId);
            createTeam();
        })
    }

    createManager();
}

appMenu();