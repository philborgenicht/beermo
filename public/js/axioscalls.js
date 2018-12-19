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

function postNewFavor(id){
  return axios.post('favors/', id)
}

function deleteUser(user){
  return axios.patch(`users/delete/${user.email}`, user)
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
  return axios.post(`token/${user.email}`,user)
}

function updateUser(user){
  return axios.patch(`users/${user.id}`, user)
}

function updateLogin(user){
  return axios.post('update/', user)
}
