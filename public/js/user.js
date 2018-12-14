document.addEventListener("DOMContentLoaded", function(){

  const userdata=document.getElementById('userdata')
  const favorite=document.getElementById('favorite')

    getMyInfo(6)
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

    getMyFavoriteBeer(6)
    .then( results => {
      console.log(results.data)
      for (var i = 0; i < results.data.length; i++) {
        let newp = document.createElement('p')

        newp.innerText =
        `My Favorite Beer: ${results.data.beer_id}

        `

        favorite.appendChild(newp)
      }
    })







})
