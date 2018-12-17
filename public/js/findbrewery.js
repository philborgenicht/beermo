document.addEventListener("DOMContentLoaded", function(){
let searchButton = document.getElementById("search")


searchButton.addEventListener('click', function(event){
  let userText = document.getElementById("textarea1")
  axios.get(`https://api.openbrewerydb.org/breweries?by_state=${userText.value}`)
   .then(function(response) {
     axios.get(response.data)
     for(let i=0; i<response.data.length; i++){

     const brewlist=document.getElementById('brewlist')
     let li=document.createElement('li')
     li.setAttribute('class', 'brewery_listing')
     li.innerText=`Listing # ${i+1}:
     Brewery Name: ${response.data[i].name},
     Brewery Type: ${response.data[i].brewery_type},
     Address : ${response.data[i].street}, ${response.data[i].city},
     Website: ${response.data[i].website_url}

     `


     brewlist.appendChild(li)
   }
   })
   .catch(function(error) {
      console.log('error')
  })
})




})
