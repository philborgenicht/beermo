//get one user
function getMyAccount(userid){
  return axios.patch(/transactions/users.id, userid)
}
