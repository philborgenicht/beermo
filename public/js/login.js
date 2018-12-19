document.addEventListener("DOMContentLoaded", function(){
  let loginForm = document.getElementById("login-form")
   // M.init();


  loginForm.addEventListener('submit', event=>{

    event.preventDefault()




    let password = document.getElementById("password-input").value
    let email = document.getElementById("email-input").value

    let user ={}
    user.email = email
    user.password = password
    login(user)
      .then(data=>{
        console.log(data.status)





        if(data.status===200){
          return window.open('./user.html','_self')

        }

        })
        .catch(err=>{
          M.toast({html:"incorrect password"})

      })



  })

  })
