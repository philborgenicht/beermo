document.addEventListener("DOMContentLoaded", function(){
  const deleteUser = document.getElementById("delete-login-form")

  deleteUser.addEventListener('submit', event=>{
    let password = document.getElementById("password-inputD").value
    let email = document.getElementById("email-inputD").value

    let user ={}
    user.email = email
    user.password = password
    login(user)
      .then(result=>{
        let id = result.id
        window.open('./delete_user_login.html','_self')
        deleteUserConfirm(id)
          .then(data=>{
            let id = data.id
            deleteUser(id)
        })
      })
  })

})
