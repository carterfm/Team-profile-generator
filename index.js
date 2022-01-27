//Acquiring necessary modules for the main program to execute
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");


//Setting questions to be used in inquirer prompts when the application is running.
// const managerPrompts = [
//     {
//         type: "input",
//         message: "Please enter the team manager's name: ",
//         name: "name"
//     },
//     {
//         type: "input",
//         message: "Please enter the team manager's employee ID: ",
//         name: "id"
//     },
//     {
//         type: "input",
//         message: "Please enter the team manager's email address: ",
//         name: "email"
//     },
//     {
//         type: "input"
//     }
// ]

// const runApp = async () => {
//     //Setting up array that we'll pass to generateTeam (the function defined in generateHTML.js)
//     //to create the text of our html page.
//     let team = [];
//     //Setting up a variable to keep track of whether we should keep ru

//     //
// }

//Pseudo-code: 
//User starts app:
//-> prompts user for team manager's name, ID, email, office #
//-> builds a manager object based on that, adds it to team array
//-> (MAIN LOOP STEP) prompts user to add engineer, add intern, finish building team:
//-> -> if add engineer
//-> -> -> prompts user for engineer's name, ID, email, GitHub username
//-> -> -> builds an engineer object based on that, adds it to team array
//-> -> -> return to (MAIN LOOP STEP)
//-> -> if add intern
//-> -> -> prompts user for intern's name, ID, email, school
//-> -> -> builds an intern object based on that, adds it to team array
//-> -> -> return to (MAIN LOOP STEP)
//-> -> if finish building team:
//-> -> -> break out of loop
//-> Call function exported by generateHtml.js to generate text of html page
//-> Run fs.writeFile to write team.html to dist directory using text generated in previous step