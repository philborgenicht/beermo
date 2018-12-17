verifyUser()
  .then(verified => {
    if (verified.data) {
      let loginButton1 = document.getElementById('login1')
      let loginButton2 = document.getElementById('login2')
      loginButton1.innerText = "logout"
      loginButton2.innerText = "logout"
    document.addEventListener('click', function(event){
      logout()
    })
    }
  })
