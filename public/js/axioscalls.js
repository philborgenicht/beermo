function getAllUsers(){
  return axios.get('/users')
}

function createNewUser(user){
  return axios.post('/users', user)
}

function deleteUser(userId){
  return axios.delete(`/users/${userId}`)
}

//get one user
function getOneUser(userId){
  return axios.get(`/users/${userId}`)
}

//update user
function updateUser(user){
  return axios.patch(`/users/${user.id}`, user)

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
