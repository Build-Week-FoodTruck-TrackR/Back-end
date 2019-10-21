export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const FETCH_ERROR = 'FETCH_ERROR';
export const logOut=() =>{
  localStorage.clear()
  return{
    type:LOGOUT
  }
}



