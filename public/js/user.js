document.addEventListener("DOMContentLoaded", function(){
  const userdata=document.getElementById('userdata')
  const favorite=document.getElementById('favorite')
  const deleteButton=document.getElementById("deleteme")
  const form=document.getElementById('form')
  const usernumber=document.getElementById('usernumber')
  const updateButton=document.getElementById('updateme')


    verifyUser()
    .then(verified=>{
      if(typeof verified.data !== 'number'){
        return window.open('./aboutus.html','_self')
      }
      let id=verified.data
    getMyInfo(id)

    .then( results => {
          console.log(results.data)
        for (var i = 0; i < results.data.length; i++) {
          let li = document.createElement('li')

          li.innerText =
          `Date I joined: ${results.data[i].created_at.substring(0,10)}
          First Name: ${results.data[i].first_name}
          Last Name: ${results.data[i].last_name}
          Email Address: ${results.data[i].email}
          `
          userdata.appendChild(li)
        }
      })
    })

    verifyUser()
    .then(verified=>{
      if(!verified){
        return
      }
      let id=verified.data
      getMyFavoriteBeer(id)
      .then( results => {
        for (var i = 0; i < results.data.length; i++) {
          let li = document.createElement('li')

          li.innerText =
          `My Favorite Beer: ${results.data[i].beer_id}
          `
          favorite.appendChild(li)
        }
      })
    })

  deleteButton.addEventListener('click', event=>{
    verifyUser()
    .then(verified=>{
      if(typeof verified.data !== 'number'){
        return window.open('./aboutus.html','_self')
      }
      logout()
      window.open('./delete_user_login.html','_self')
      })
    })

    updateButton.addEventListener('click', event=>{
      verifyUser()
      .then(verified=>{
        if(typeof verified.data !== 'number'){
          return window.open('./update_form.html','_self')
        }
      })
    })
  })
