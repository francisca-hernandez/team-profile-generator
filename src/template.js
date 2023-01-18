
// Manager card 
const Manager = managerData => {
    return `
    <div id="${managerData.getRole()}-card" class="box card">
      <div class="box name-role manager-name">
        <h2>${managerData.getName()}</h2>
        <h3>Role: ${managerData.getRole()}</h3>
      </div> 
      <div class="box employee-info">
        <ul class="list-group">
          <li class="list-group-item">ID: ${managerData.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${managerData.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
  `
  }

// Engineer card 
const Engineer = engineerData => {
  return `
  <div id="${engineerData.getRole()}-card" class="box card">
    <div class="box name-role engineer-name">
      <h2>${engineerData.getName()}</h2>
      <h3>Role: ${engineerData.getRole()}</h3>
    </div> 
    <div class="box employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineerData.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
        
        <li class="list-group-item">Github:
        <a href="https://www.github.com/${engineerData.getGithub()}" target="_blank">www.github.com/${engineerData.getGithub()}</a>
        </li>
      </ul>
    </div>
  </div>
`
}
// Intern card 
const Intern = internData => {
  return `
  <div id="${internData.getRole()}-card" class="box card">
    <div class="box name-role intern-name">
      <h2>${internData.getName()}</h2>
      <h3>Role: ${internData.getRole()}</h3>
    </div> 
    <div class="box employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${internData.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
        <li class="list-group-item">School: ${internData.getSchool()}</li>
      </ul>
    </div>
  </div>
`
}
// creates cards for each team member //AskBCS for help
const employeesCrd = employeesArr => {
  let employeeHtml = ''

  for ( i = 0; i < employeesArr.length; i++ ) {
    if (employeesArr[i].getRole() === "Manager"){
      employeeHtml = employeeHtml + Manager(employeesArr[i])
    }
    if (employeesArr[i].getRole() === "Engineer"){
      employeeHtml = employeeHtml + Engineer(employeesArr[i])
    }
    if (employeesArr[i].getRole() === "Intern"){
      employeeHtml = employeeHtml + Intern(employeesArr[i])
    }
  } return employeeHtml
}
// html page template that will be used for the team cards
const template = data => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Team Profile</title>
      <link rel="stylesheet" href="./style.css">
      <source src="../src/template.js" type="template">
    </head>
    <body>
      <header class = "container">
        <div class = "flex box justify-center my-team">
          <h1> My Team </h1>
        </div>
      </header>
      <main class = "container">
      ${employeesCrd(data)}
      </main>
    </body>
  </html>
`
}

module.exports = template;