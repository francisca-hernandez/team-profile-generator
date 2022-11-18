// Dependencies 

const { ADDRGETNETWORKPARAMS } = require("dns");
const fs = require("fs");
const inquirer = require("inquirer");

// const Employee = require("./lib/Employee");
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");

//const generatePage= require('.src/')


//empty array to store team memebers in
const teamArray = [];

const startteam = () => {

//Questions for User input 

//Manager questions

inquirer.prompt([
  {
    type: 'input',
    name: 'managerName',
    message: "Please enter Managers name"

  },

  {
    type: 'input',
    name: 'managerEmail',
    message: 'What is this managers Email adress?'
  },

  {
    type: 'input',
    name: 'office',
    message: 'What is this managers office number?'
  },
])

  .then((answers) => {
    const newManager = (answers.managerName, answers.managerEmail, answers.office);
    console.log(answers);
    // teamArray.push(newManager);
    // console.log(teamArray);
   newEngineer();
  });



//Engineer questions  
 const newEngineer = () => {

inquirer.prompt([
  {
    type: 'input',
    name: 'engineerName',
    message: "name of Engineer"

  },

  {
    type: 'input',
    name: 'engineerId',
    message: 'Employee ID'
  },

  {
    type: 'input',
    name: 'engineerEmail',
    message: 'what is the employees email address?'
  },

  {
    type: "input",
    name: "engineergGithub",
    message: "what is the Engineers github address",
  }

])
 
  .then((answers) => {
    const newEngineer = (answers.Engineername, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
    console.log(answers);
    newIntern();
    
  });

 };

// //Intern questions
const newIntern = () => {

inquirer.prompt ([
  {
  type: 'input',
  name:'internName',
  message: "Name of Intern"

},

{
  type: 'input',
  name: 'internId',
  message: 'Intern ID'
},

{
  type: 'input',
  name: 'internEmail',
  message: 'what is the Interns email address?'
},

{
  type: "input",
  name: "internSchool",
  message: "what school does the the Intern attend?",
}

])

.then((answers) => {
  const newIntern = (answers.intersName, answers.internId, answers.internEmail, answers.internSchool);
  console.log(answers);
});
};

};



//function to initialize program
function init() {
  inquirer.prompt(answers)
      .then(function (response) {

          writeToFile(response);
      })
};

startteam();