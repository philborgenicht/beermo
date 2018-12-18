//get one user
function getMyAccount(id){
  return axios.get(`transactions/${id}`)
}

function getMyInfo(id){
  return axios.get(`users/${id}`)
}

function getMyFavoriteBeer(id){
  return axios.get(`favorites/${id}`)
}

function createNewUser(user){
  return axios.post('signup/', user)
}

function populateFavorTable(){
  return axios.get('favors/')
}

function deleteUser(user){
  return axios.delete(`users/${user}`,user)
}

function login(user){
  return axios.post(`token/`, user)
}

function verifyUser(){
  return axios.get('token/')
}

function logout(){
  return axios.delete('token/')
}

function deleteUserConfirm(user){
  console.log("user info", user)
  return axios.delete(`token/${user.email}`,user)
}
