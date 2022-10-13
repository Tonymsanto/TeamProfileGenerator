const { createPromptModule } = require("inquirer");

const makeIntern = function(intern) {
    return `
    <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-header">
          ${intern.name}
          </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
    </div>
    </div>
    `;
}

const makeManager = function(manager) {
    return `
    <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-header">
          ${manager.name}
          </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
    </div>
    </div>
    `;
}

const makeEngineer = function(engineer) {
    return `
    <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-header">
          ${engineer.name}
          </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
    </ul>
    </div>
    </div>
    `;
}

makeHTML = (input) => {

    // array for team of employees 
    theTeam = [];

    for (let i = 0; i < input.length; i++) {
        const employee = input[i];
        const role = employee.getRole();


        // make manager 
        if (role === 'Manager') {
            const managerInfo = makeManager(employee);

            theTeam.push(managerInfo);
        }

        // make engineer 
        if (role === 'Engineer') {
            const engineerInfo = makeEngineer(employee);

            theTeam.push(engineerInfo);
        }

        // make intern 
        if (role === 'Intern') {
            const internInfo = makeIntern(employee);

            theTeam.push(internInfo);
        }

    }

    const employeeTeam = theTeam.join('')

    const makeTeam = makeTeamPage(employeeTeam);
    return makeTeam;

}

const makeTeamPage = function(employeeTeam) {
    return `
 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/95e8849893.js" crossorigin="anonymous"></script>
        <!-- Bootstrap CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1>Team Profiles</h1>
        </header>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            ${employeeTeam}
        </div>
    </body>
    </html>

`;
}

module.exports = makeHTML;