document.addEventListener("DOMContentLoaded", function(){

  const userdata=document.getElementById('userdata')
  const favorite=document.getElementById('favorite')

    getMyInfo(id)
    .then( results => {
      console.log(results.data)
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
