document.addEventListener("DOMContentLoaded", function(){


const appendage=document.getElementById('acctinfo')



  verifyUser()
  .then(verified=>{
    if(typeof verified.data !== 'number'){
      return window.open('./aboutus.html','_self')
    }

    getMyAccount(id)
    .then( results => {
      console.log(results.data)
      for (var i = 0; i < results.data.length; i++) {
        let li = document.createElement('li')

        li.innerText =
        `Transaction Id: ${results.data[i].id},

        Beer Earned: ${results.data[i].beer_id},

        Favor Performed: ${results.data[i].favor}

        `

        appendage.appendChild(li)
      }
    })
  })




})
