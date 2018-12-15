document.addEventListener("DOMContentLoaded", function(){


let row1=document.getElementById('row1')
let row2=document.getElementById('row2')
let row3=document.getElementById('row3')
let row4=document.getElementById('row4')
let row5=document.getElementById('row5')
let row6=document.getElementById('row6')
let row7=document.getElementById('row7')
let row8=document.getElementById('row8')

let tableRows=document.getElementsByClassName('tableRows')

let tableBody=document.getElementById('tableBody')

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
