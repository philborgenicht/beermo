document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById("form")
  let signUp=document.getElementById("download-button")
  let favorListing=document.getElementById('favor1')
  let favorSide=document.getElementById('favor2')
  let account1=document.getElementById('account1')
  let account2=document.getElementById('account2')
  let user1=document.getElementById('user1')
  let user2=document.getElementById('user2')



  verifyUser()
    .then(verified => {
      if (verified.data) {
        let loginButton1 = document.getElementById('login1')
        let loginButton2 = document.getElementById('login2')
        loginButton1.innerText = "Log Out"
        loginButton2.innerText = "Log Out"
        loginButton1.addEventListener('click', function(event) {
          logout()
          loginButton1.setAttribute('href', 'aboutus.html')
        })
      }
      if (verified.data){
        signUp.style.display = "none"
      }
      if(typeof verified.data !== 'number'){
        favorListing.style.display = "none"
        favorSide.style.display = "none"
        account1.style.display = "none"
        account2.style.display = "none"
        user1.style.display = "none"
        user2.style.display = "none"
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
