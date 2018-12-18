document.addEventListener("DOMContentLoaded", function(){
  const deleteUser = document.getElementById("delete-login-form")

  deleteUser.addEventListener('submit', event=>{
    let password = document.getElementById("password-inputD").value
    let email = document.getElementById("email-inputD").value
    console.log("email",email)
    let user ={}
    user.email = email
    user.hashed_password = password

    // deleteUserConfirm(user)
    deleteUser(user)
  })

})
