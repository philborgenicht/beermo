document.addEventListener("DOMContentLoaded", function(){

  const userdata=document.getElementById('userdata')
  const favorite=document.getElementById('favorite')
  const deleteButton=document.getElementById("deleteme")
  const form=document.getElementById('form')
  const usernumber=document.getElementById('usernumber')

  // form.addEventListener('submit', function(event){
  //   let userid=event.target.id.value
    verifyUser()
    .then(verified=>{

      if(typeof verified.data !== 'number'){
        return window.open('./aboutus.html','_self')
      }
    getMyInfo(id)
    .then( results => {
        for (var i = 0; i < results.data.length; i++) {
          let li = document.createElement('li')

          li.innerText =
          `Date I joined: ${results.data[i].created_at},

          First Name: ${results.data[i].first_name},

          Last Name: ${results.data[i].last_name},

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
      getMyFavoriteBeer(id)
      .then( results => {
        console.log(results.data)
        for (var i = 0; i < results.data.length; i++) {
          let li = document.createElement('li')

          li.innerText =
          `My Favorite Beer: ${results.data[i].beer_id}

          `
          favorite.appendChild(li)
        }
      })
    })

// })
    // deleteButton.addEventListener('click', function(){
    //   deleteUser(id)
    //   .then(data=>{
    //     console.log(data)
    //   })
    // })







})
