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
