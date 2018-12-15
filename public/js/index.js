document.addEventListener("DOMContentLoaded", function(){
  let form = document.getElementById("form")



  form.addEventListener('submit', function(event){
    event.preventDefault()
    let fname=document.getElementById('first_name-input').value
    let lname=document.getElementById('last_name-input').value
    let email=document.getElementById('email-input').value
    let password= document.getElementById('password-input').value
    let user = {}
    user.first_name = fname
    user.last_name = lname
    user.email = email
    user.hashed_password = password

console.log(email)


    createNewUser(user)
    .then(results => {

      console.log(results.data)
    })
  })











})
