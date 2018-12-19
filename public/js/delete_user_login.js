document.addEventListener("DOMContentLoaded", function(){
  const deleteUserButton = document.getElementById("delete-login-form")

  deleteUserButton.addEventListener('submit', event=>{
    event.preventDefault()
    let password = document.getElementById("password-inputD").value
    let email = document.getElementById("email-inputD").value
    console.log("email",email)
    let user ={}
    user['email'] = email
    user['password'] = password

    login(user)
      .then(result=>{
        deleteUser(user)
          .then(result=>{
            logout()
            return window.open('./index.html','_self')
          })
      })
  })

})
