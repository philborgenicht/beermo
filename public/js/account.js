document.addEventListener("DOMContentLoaded", function(){


const appendage=document.getElementById('acctinfo')



  verifyUser()
  .then(verified=>{
    if(typeof verified.data !== 'number'){
      return window.open('./aboutus.html','_self')
  
    }
    let id = verified.data


    }

    getMyAccount(id)
    .then( results => {
      for (var i = 0; i < results.data.length; i++) {
        let li = document.createElement('li')

        let brian

        if (results.data[i].sender===false) {
          brian = `You Favored Them`
        }else{
          brian = `They Favored You`
        }

        li.innerText =
        `Them: ${results.data[i].sender_first_name} ${results.data[i].sender_last_name},

        Beer Earned: ${results.data[i].beer_id},

        Favor Performed: ${results.data[i].favor},

        ${brian},

        Transaction Date: ${results.data[i].created_at.substring(0,10)}

        `


        appendage.appendChild(li)
      }
    })
  })




})
