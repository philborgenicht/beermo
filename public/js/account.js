document.addEventListener("DOMContentLoaded", function(){

const button=document.getElementById("recap")
let appendage=document.getElementById("acctinfo")
let acctnum=document.getElementById("acctnum")



button.addEventListener('click', function(){
  getMyAccount(userid)
  .then(results=>{
    let fname=document.createElement('li')
    let lname=document.createElement('li')
    let email=document.createElement('li')
    fname.innerText=results[userid]["first_name"]
    lname.innerText=results[userid]["last_name"]
    email.innerText=results[userid]["email"]
    appendage.appendChild(fname)
    appendage.appendChild(lname)
    appendage.appendChild(email)
  })

})













})
