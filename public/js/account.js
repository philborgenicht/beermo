document.addEventListener("DOMContentLoaded", function(){


const appendage=document.getElementById('acctinfo')
const appendage2=document.getElementById('acctinfo2')




  verifyUser()
  .then(verified=>{
    if(typeof verified.data !== 'number'){
      return window.open('./aboutus.html','_self')
    }
    let id = verified.data

    getMyAccount(id)
    .then( results => {
      let data = results.data[0]
      let data2 = results.data[1]

      console.log('data1', data, 'data2',data2)

      for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li')

        li.innerText =
        `Them: ${data[i].sender_first_name} ${data[i].sender_last_name}

        Beer Earned: ${data[i].beer_id}

        Favor Performed: ${data[i].favor}

        Transaction Date: ${data[i].created_at.substring(0,10)}

        `


        appendage.appendChild(li)

      }
      for (let i = 0; i < data2.length; i++) {
        let li2 = document.createElement('li')

        li2.innerText =
        `Them: ${data2[i].sender_first_name} ${data2[i].sender_last_name}

        Beer Earned: ${data2[i].beer_id}

        Favor Performed: ${data2[i].favor}

        Transaction Date: ${data2[i].created_at.substring(0,10)}

        `
        appendage2.appendChild(li2)

      }
    })
  })




})
