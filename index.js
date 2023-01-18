// Dependencies 
const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const Employee = require("./lib/Employee");

//empty array to store team memebers in
const teamArray = [];

const fs = require('fs');
const path = require('path');

const directory = path.resolve(__dirname, 'dist');
const teamHTML = path.join(directory, 'index.html');

//generate team page variable
const generatePage = require('./src/template');



//function to start team questions
const startteam = () => {

  console.log(` Answer the following questions to build your team template`);

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
      name: 'managerId',
      message: 'Employee ID'
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
      const newManager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.office);

      console.log(newManager);
      teamArray.push(newManager);
      console.log(teamArray);
      addTeamMem();
    });
  };

//option to add what team members
  const addTeamMem = () => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'teamMember',
          message: 'Which team member would you like to add?',
          choices: ['Engineer', 'Intern', 'Done']
        }
      ])
      .then((choice) => {
        switch (choice.teamMember) {
          case 'Engineer':
            newEngineer();
            break;
          case 'Intern':
            newIntern();
            break;
          case 'Done':
            console.log('Done!')

            createPage();
        }
      })
      
  }



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
        name: "engineerGithub",
        message: "what is the Engineers github address",
      }

    ])

      .then((answers) => {
        const newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        console.log(newEngineer);
        teamArray.push(newEngineer);
        console.log(teamArray);
        newIntern();

      });

  };

  // //Intern questions
  const newIntern = () => {

    inquirer.prompt([
      {
        type: 'input',
        name: 'internName',
        message: "Name of Intern"

      },

      {
        type: 'input',
        name: 'internId',
        message: 'Intern ID'
      },

      {
        type: 'input',
        name: 'internsEmail',
        message: 'what is the Interns email address?'
      },

      {
        type: "input",
        name: "internSchool",
        message: "what school does the the Intern attend?",
      }

    ])

      .then((answers) => {
        const newIntern = new Intern(answers.internName, answers.internId, answers.internsEmail, answers.internSchool);
        console.log(newIntern);
        teamArray.push(newIntern);
        console.log(teamArray);



        console.log(`
    
                  Congratulations! You now have a new team!
       
        `)

        createPage();
      });

  };




//function to generate html 
const createPage = () => {
  fs.writeFileSync(teamHTML, generatePage(teamArray), 'utf-8');
  console.log('Page generated!');
}



startteam();