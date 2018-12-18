document.addEventListener("DOMContentLoaded", function(){
  const deleteUser = document.getElementById("delete-login-form")

  deleteUser.addEventListener('submit', event=>{
    let password = document.getElementById("password-inputD").value
    let email = document.getElementById("email-inputD").value

    let user ={}
    user.email = email
    user.password = password
    deleteUserConfirm(user)
    .then(data=>{
      let id = data.id
      deleteUser(id)
    })
  })

})
