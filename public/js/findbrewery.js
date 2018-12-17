document.addEventListener("DOMContentLoaded", function(){
let searchButton = document.getElementById("search")


searchButton.addEventListener('click', function(event){
  let userText = document.getElementById("textarea1")
  axios.get(`https://api.openbrewerydb.org/breweries?by_state=${userText.value}`)
   .then(function(response) {
     axios.get(response.data)
     console.log(response.data)
   })
   .catch(function(error) {
      console.log('error')
  })
})


})
