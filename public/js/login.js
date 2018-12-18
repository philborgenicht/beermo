document.addEventListener("DOMContentLoaded", function(){
  let loginForm = document.getElementById("login-form")


  loginForm.addEventListener('submit', event=>{
    event.preventDefault()

    let password = document.getElementById("password-input").value
    let email = document.getElementById("email-input").value

    let user ={}
    user.email = email
    user.password = password
    login(user)
      .then(data=>{
        if(data.status===200){
          return window.open('./aboutus.html','_self')

        }

      })
  })

  })
