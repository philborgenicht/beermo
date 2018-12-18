document.addEventListener('DOMContentLoaded', function() {

  let form = document.querySelector('form')

  form.addEventListener('submit', (event)=> {
    event.preventDefault()
    let user = {}
    user.first_name = name.value
    user.last_name = name.value
    user.email = email.value
    updateUser(user)
    .then( results => {
      console.log(results.data);
    })
  })
});
