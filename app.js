// Dependencies 
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


//html render

//empty array to store team memebers in
const teamArray = [];

//team member questions

//Manager:
const managerQuestions = [
  { type: 'input',
  name:'managerName',
  message: "Please Manager name"

},

{
    type: 'input',
    name: 'managerEmail',
    message: 'What is this managers Email adress, enter your email adress if you are the manager of this team'
},

{
    type: 'input',
    name: 'office',
    message: 'What is this managers office number? if you are the manager of this team, enter your office number'
},
]

//Engineer

//Intern 