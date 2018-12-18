document.addEventListener("DOMContentLoaded", function(){
  let tableBody=document.getElementById('tableBody')


  verifyUser()
  .then(verified=>{
    if(typeof verified.data !== 'number'){
      return window.open('./aboutus.html','_self')

    }
    let id = verified.data

    populateFavorTable()
    .then(results=>{
      console.log(results.data)
      for (var i = 0; i < results.data.length; i++) {
        let newRow = document.createElement('tr')
        let newData= document.createElement('td')
        // newRow.innerHtml =
        newData.innerText= `Favor Listing: ${results.data[i].id},
        Favor Description: ${results.data[i].favor_name},
        Favor Value: ${results.data[i].favor_size}`
        tableBody.appendChild(newRow)
        newRow.appendChild(newData)
      }
    })
  })

})
