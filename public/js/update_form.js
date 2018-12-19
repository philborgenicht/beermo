document.addEventListener("DOMContentLoaded", function(){
  const updateForm=document.getElementById('login-form2')

  updateForm.addEventListener('submit', event=>{
    event.preventDefault()
    verifyUser()
    .then(verified=>{
      if(typeof verified.data !== 'number'){
        return window.open('./update_form.html','_self')
      }

      const fiName=document.getElementById('first-name-input').value
      const laName=document.getElementById('last-name-input').value
      const emailUp=document.getElementById('email-input-up').value
      const passUp=document.getElementById('password-input-up').value
      let user={}
      user['id'] = verified.data
      user['first_name'] = fiName
      user['last_name'] = laName
      user['email'] = emailUp
      user['hashed_password'] = passUp

      updateUser(user)
        .then(result=>{
          logout()
            .then(stuff=>{
              updateLogin(user)
            })
            .then(data=>{
              return window.open('./user.html','_self')
            })
        })
    })
  })

})
