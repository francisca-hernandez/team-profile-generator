// const generateCards = team => {
//   const managerCard = manager => {
//       return `
//       <div class="card mx-2 my-1">
//           <div class="card-header">
//               <h2 class="card-title">${manager.getName()}</h2>
//               <h3 class="card-title">${manager.getRole()}</h3>
//           </div>
//           <div class="card-body">
//               <ul class ="list-group">
//                   <li class="list-group-item">ID: ${manager.getId()} </li>
//                   <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a> </li>
//                   <li class="list-group-item">Office Number: ${manager.getOfficeNumber()} </li>
//               </ul>
//           </div>
//       </div>
//       `
//   }

// };



const generateCards = team => {
    const managerCard = manager => {
        return `
        <div class="card mx-2 my-1">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title">${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class ="list-group">
                    <li class="list-group-item">ID: ${manager.getId()} </li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a> </li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()} </li>
                </ul>
            </div>
        </div>
        `
    }

    const engineerCard = engineer => {
        return `
        <div class="card mx-2 my-1">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title">${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class ="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()} </li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a> </li>
                    <li class="list-group-item">Github:<a href="https://github.com/${engineer.getGithub()}" target="_blank"> ${engineer.getGithub()}</a> </li>
                </ul>
            </div>
        </div>
        `
    }

    const internCard = intern => {
        return `
        <div class="card mx-2 my-1">
            <div class="card-header">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title">${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class ="list-group">
                    <li class="list-group-item">ID: ${intern.getId()} </li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a> </li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `
    }

    const teamHTML = [];

    teamHTML.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => managerCard(manager))
        .join(''));
    teamHTML.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => engineerCard(engineer))
        .join(''));
    teamHTML.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => internCard(intern))
        .join(''));
    return teamHTML.join('')
};
