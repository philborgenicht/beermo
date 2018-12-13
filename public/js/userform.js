document.addEventListener('DOMContentLoaded', function() {

  let form = document.querySelector('form')

  form.addEventListener('submit', (event)=> {
  event.preventDefault()
  let user = {}
  user.name = form.name.value
  user.isNice = form.nice.checked
  user.id = userId
  updateUser(user)
  .then( results => {
    console.log(results.data);
  })
})
});
