document.addEventListener("DOMContentLoaded", function(){

const button=document.getElementById("recap")



button.addEventListener('click', function(event){
  let appendage=document.getElementById("acctinfo")
  let acctnum=document.getElementById("acctnum")
  let newp=document.createElement('p')
  newp.innerText="helloworld"
appendage.appendChild(newp)
})
})
  // getMyAccount()
  // .then( results => {
  //   console.log("will sucks")
  //   console.log(results)
  //   for (var i = 0; i < results.data.length; i++) {
  //     let li = document.createElement('li')
  //     li.innerText = `${results.data[i].name}, ${results.data[i].isNice}`
  //     appendage.appendChild(li)
  //   }
  // })














})
