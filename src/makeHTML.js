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

