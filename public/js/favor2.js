document.addEventListener("DOMContentLoaded", function(){
<<<<<<< HEAD


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







=======
  let tableBody=document.getElementById('tableBody')
  let form=document.getElementById('postNewFavor')
  let newDesc=document.getElementById('favorDesc').value
  let newVal=document.getElementById('favorVal').value
  let favorlist=document.getElementById('favorlist')





  verifyUser()
  .then(verified=>{
    if(typeof verified.data !== 'number'){
      return window.open('./aboutus.html','_self')

    }
    let id = verified.data

    populateFavorTable()
    .then(results=>{
      console.log(results)
      // for (var i = 0; i < results.data.length; i++) {
      //   let newRow = document.createElement('tr')
      //   let newData= document.createElement('td')
      //   let completed=document.createElement('button')
      //
      //   // newRow.innerHtml =
      //   newData.innerText= `Favor Listing: ${results.data[i].id},
      //   Favor Description: ${results.data[i].favor_name},
      //   Favor Value: ${results.data[i].favor_size}`
      //   tableBody.appendChild(newRow)
      //   newRow.appendChild(newData)
      // }
      for (var i=0; i<results.data.length; i ++){
        // let newlisting=document.createElement('li')
        // newlisting.innerText=`Favor Listing: ${results.data[i].id},
        //    Favor Description: ${results.data[i].favor_name},
        //    Favor Value: ${results.data[i].favor_size}`
        //    favorlist.appendChild(newlisting)
        //    new
        favorlist.innerHTML+=`
            <li class=${i+1}>Favor Listing: ${results.data[i].id}</li>
            <li class=${i+1}>Favor Description: ${results.data[i].favor_name}</li>
            <li class=${i+1}>Favor Value: ${results.data[i].favor_size}</li>
            <li class=${i+1}><button class="finished">pending</button></li>
            `


            let completebuttons=document.getElementsByClassName('finished')
            for(let i=0; i<completebuttons.length; i++){
              completebuttons[i].addEventListener('click', function(){
                completebuttons[i].innerText="completed"
                completebuttons[i].style.backgroundColor="orange"

              })
            }
            for(let i=0; i<completebuttons.length; i++){
              completebuttons[i].addEventListener('dblclick', function(){
                completebuttons[i].innerText="pending"
                completebuttons[i].style.backgroundColor="white"
              })
            }
      }

    })

  })



  form.addEventListener('submit', function(event){
    let newFavor={}
    newFavor.favor_name=event.target.favorDesc.value
    newFavor.favor_size=event.target.favorVal.value
    postNewFavor(newFavor)
  })







<<<<<<< HEAD
  })
>>>>>>> 8e673fd0b3b0c7dad8e1d6750ce09d7e650727ec
=======
>>>>>>> 74419eea0d925012208fba108043e79b9202f06f

})
