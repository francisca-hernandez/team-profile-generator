const generateCards = team => {

const generatemgrCard= manager =>{
    return `

<div class="card-group">
        <div class="card">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${manager.getname()}</h5>            
            <h5 class="card-title"Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>

            <p class="card-text">employee id: ${manager.getId()}</h6></p>
            <p class ='card-text>Office number: ${manager.office()}</h6>
          </div>
        </div>
`
}
}