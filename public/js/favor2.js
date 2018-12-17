document.addEventListener("DOMContentLoaded", function(){


let tableBody=document.getElementById('tableBody')

<<<<<<< HEAD
=======


>>>>>>> 8221f1c255e76da2dc40a16220082e60fb9a8bc0
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
