document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById("form")

  verifyUser()
    .then(verified => {
      if (verified.data) {
        let loginButton1 = document.getElementById('login1')
        let loginButton2 = document.getElementById('login2')
        loginButton1.innerText = "logout"
        loginButton2.innerText = "logout"
        loginButton2.addEventListener('click', function(event) {
          logout()
        })
      }
    })


  form.addEventListener('submit', function(event) {
    event.preventDefault()
    let fname = document.getElementById('first_name-input').value
    let lname = document.getElementById('last_name-input').value
    let email = document.getElementById('email-input').value
    let password = document.getElementById('password-input').value
    let user = {}
    user.first_name = fname
    user.last_name = lname
    user.email = email
    user.hashed_password = password

    createNewUser(user)
      .then(result => {

      })
  })

})
