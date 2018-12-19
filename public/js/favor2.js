document.addEventListener("DOMContentLoaded", function(){
  let tableBody=document.getElementById('tableBody')
  let form=document.getElementById('postNewFavor')
  let newDesc=document.getElementById('favorDesc').value
  let newVal=document.getElementById('favorVal').value
  let favorlist=document.getElementById('favorlist')



  let firstlisting=document.getElementsByClassName('1')
  let secondlisting=document.getElementsByClassName('2')
  let thirdlisting=document.getElementsByClassName('3')
  let fourthlisting=document.getElementsByClassName('4')
  let fifthlisting=document.getElementsByClassName('5')
  let sixthlisting=document.getElementsByClassName('6')
  let seventhlisting=document.getElementsByClassName('7')
  let eighthlisting=document.getElementsByClassName('8')
  let ninthlisting=document.getElementsByClassName('9')
  let tenthlisting=document.getElementsByClassName('10')
  let eleventhlisting=document.getElementsByClassName('11')


  verifyUser()
  .then(verified=>{
    if(typeof verified.data !== 'number'){
      return window.open('./aboutus.html','_self')

    }
    let id1 = verified.data

    populateFavorTable()
    .then(results=>{
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
            <li class=${i+1}><button  id="willsbuttons" class=${i+1}>pending</button></li>
            `


            let firstbutton=document.getElementsByClassName('1')
            for(let i=0; i<firstbutton.length; i++){
              firstbutton[i].addEventListener('click', function(){
                firstbutton[i].innerText="completed"
                firstbutton[i].style.backgroundColor="orange"

                for(let j=0; j<firstlisting.length; j++){
                  firstlisting[j].style.visibility="hidden"
                  let favorInfo=firstlisting[j]
                  let obj={}
                  
                }
              })
            }

            let secondbutton=document.getElementsByClassName('2')
            for(let i=0; i<secondbutton.length; i++){
              secondbutton[i].addEventListener('click', function(){
                secondbutton[i].innerText="completed"
                secondbutton[i].style.backgroundColor="orange"

                for(let j=0; j<secondlisting.length; j++){
                  secondlisting[j].style.visibility="hidden"
                }
              })
            }

            let thirdbutton=document.getElementsByClassName('3')
            for(let i=0; i<thirdbutton.length; i++){
              thirdbutton[i].addEventListener('click', function(){
                thirdbutton[i].innerText="completed"
                thirdbutton[i].style.backgroundColor="orange"

                for(let j=0; j<thirdlisting.length; j++){
                  thirdlisting[j].style.visibility="hidden"
                }
              })
            }

            let fourthbutton=document.getElementsByClassName('4')
            for(let i=0; i<fourthbutton.length; i++){
              fourthbutton[i].addEventListener('click', function(){
                fourthbutton[i].innerText="completed"
                fourthbutton[i].style.backgroundColor="orange"

                for(let j=0; j<fourthlisting.length; j++){
                  fourthlisting[j].style.visibility="hidden"
                }
              })
            }

            let fifthbutton=document.getElementsByClassName('5')
            for(let i=0; i<fifthbutton.length; i++){
              fifthbutton[i].addEventListener('click', function(){
                fifthbutton[i].innerText="completed"
                fifthbutton[i].style.backgroundColor="orange"

                for(let j=0; j<fifthlisting.length; j++){
                  fifthlisting[j].style.visibility="hidden"
                }
              })
            }

            let sixthbutton=document.getElementsByClassName('6')
            for(let i=0; i<sixthbutton.length; i++){
              sixthbutton[i].addEventListener('click', function(){
                sixthbutton[i].innerText="completed"
                sixthbutton[i].style.backgroundColor="orange"

                for(let j=0; j<sixthlisting.length; j++){
                  sixthlisting[j].style.visibility="hidden"
                }
              })
            }

            let seventhbutton=document.getElementsByClassName('7')
            for(let i=0; i<seventhbutton.length; i++){
              seventhbutton[i].addEventListener('click', function(){
                seventhbutton[i].innerText="completed"
                seventhbutton[i].style.backgroundColor="orange"

                for(let j=0; j<seventhlisting.length; j++){
                  seventhlisting[j].style.visibility="hidden"
                }
              })
            }

            let eighthbutton=document.getElementsByClassName('8')
            for(let i=0; i<eighthbutton.length; i++){
              eighthbutton[i].addEventListener('click', function(){
                eighthbutton[i].innerText="completed"
                eighthbutton[i].style.backgroundColor="orange"

                for(let j=0; j<eighthlisting.length; j++){
                  eighthlisting[j].style.visibility="hidden"
                }
              })
            }

            let ninthbutton=document.getElementsByClassName('9')
            for(let i=0; i<ninthbutton.length; i++){
              ninthbutton[i].addEventListener('click', function(){
                ninthbutton[i].innerText="completed"
                ninthbutton[i].style.backgroundColor="orange"

                for(let j=0; j<ninthlisting.length; j++){
                  ninthlisting[j].style.visibility="hidden"
                }
              })
            }

            let tenthbutton=document.getElementsByClassName('10')
            for(let i=0; i<tenthbutton.length; i++){
              tenthbutton[i].addEventListener('click', function(){
                tenthbutton[i].innerText="completed"
                tenthbutton[i].style.backgroundColor="orange"

                for(let j=0; j<tenthlisting.length; j++){
                  tenthlisting[j].style.visibility="hidden"
                }
              })
            }

            let eleventhbutton=document.getElementsByClassName('10')
            for(let i=0; i<eleventhbutton.length; i++){
              eleventhbutton[i].addEventListener('click', function(){
                eleventhbutton[i].innerText="completed"
                eleventhbutton[i].style.backgroundColor="orange"

                for(let j=0; j<eleventhlisting.length; j++){
                  eleventhlisting[j].style.visibility="hidden"
                }
              })
            }

      }

    })

  })



  form.addEventListener('submit', function(event){
    event.preventDefault()
    let newFavor={}
    newFavor.favor_name=event.target.favorDesc.value
    newFavor.favor_size=event.target.favorVal.value

    postNewFavor(newFavor)

  })

  // form.addEventListener('submit', function(event){
  //   let newTrans={}
  //
  //   newTrans.recipient_id=event.target.recipientid.value
  //   newTrans.user_sender_id=event.target.senderid.value
  //   newTrans.favor=event.target.favorDesc.value
  //   newTrans.beer_id=event.target.beerid.value
  //
  //   postNewTransaction(newTrans)
  // })

  if(firstlisting.innerText==="completed"||secondlisting.innerText==="completed"||thirdlisting.innerText==="completed"||fourthlisting.innerText==="completed"||fifthlisting.innerText==="completed"||sixthlisting.innerText==="completed"||seventhlisting.innerText==="completed"||eighthlisting.innerText==="completed"||ninthlisting.innerText==="completed"||tenthlisting.innerText==="completed"||eleventhlisting.innerText==="completed"){

  }






})
