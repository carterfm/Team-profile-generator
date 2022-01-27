//Acquiring necessary modules for the main program to execute
const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./util/generateHtml.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

//Setting questions to be used in inquirer prompts when the application is running.
//First, the questions applicable to all employees:
const standardPrompt = [
    {
        type: "input",
        message: "Please input this team member's name: ",
        name: "name"
    },
    {
        type: "input",
        message: "Please input this team member's ID number: ",
        name: "id"
    },
    {
        type: "input",
        message: "Please input this team member's email address: ",
        name: "email"
    } 
];
//Now for the role-specific prompts:
const officeNumberPrompt = [{
    type: "input",
    message: "Please input this team member's office number: ",
    name: "officeNumber"
}];
const githubPrompt = [{
    type: "input",
    message: "Please input this team member's GitHub username: ",
    name: "github"
}];
const schoolPrompt = [{
    type: "input",
    message: "Please input the name of the school this team member is attending: ",
    name: "school"
}];
//Finally, the prompt for choosing whether to add another team member or terminate the program
const teamChoices = [{
    type: "list",
    prompt: "What would you like to do next?",
    choices: ["Add engineer to team", "Add intern to team", "Finalize team"],
    name: "teamChoice"
}];

const runApp = async () => {
    //Setting up array that we'll pass to generateTeam (the function defined in generateHTML.js)
    //to create the text of our html page.
    let team = [];
    //Setting up a variable to keep track of whether we should keep running the main loop or not
    let keepLooping = true;
    
    //Creating manager object
    console.log("Follow the subsequent prompts to enter your team manager's information.");
    const { name: managerName, id: managerId, email: managerEmail } = await inquirer.prompt(standardPrompt);
    const { officeNumber } = await inquirer.prompt(officeNumberPrompt);
    //Adding manager's infor to team array
    team.push(new Manager(managerName, managerId, managerEmail, officeNumber));
    //Main program loop will go here
    do {
        const { teamChoice } = await inquirer.prompt(teamChoices);

        switch(teamChoice) {
            case "Add engineer to team":
                console.log("Follow the subsequent prompts to enter this engineer's information.");
                const { name: engineerName, id: engineerId, email: engineerEmail } = await inquirer.prompt(standardPrompt);
                const { github } = await inquirer.prompt(githubPrompt);
                team.push(new Engineer(engineerName, engineerId, engineerEmail, github));
                break;
            case "Add intern to team":
                console.log("Follow the subsequent prompts to enter this intern's information.");
                const { name: internName, id: internId, email: internEmail } = await inquirer.prompt(standardPrompt);
                const { school } = await inquirer.prompt(schoolPrompt);
                team.push(new Intern(internName, internId, internEmail, school));
                break;
            default: 
                console.log("Finalizing team.")
                keepLooping = false;
                break;
        }

    } while (keepLooping);

    //Writing html file:
    fs.writeFile("./dist/team.html", generateHtml(team), (err) => {
        if(err){
          throw err;
        }
        console.log("Wrote team.html to dist directory.");
    });
}

runApp();

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



