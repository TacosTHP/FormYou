import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../types/authTypes'

console.log(Cookies.get('token'), 'yoloo', (Cookies.get('token') == undefined))
/*let tmp1, tmp2
if (Cookies.get('token') != undefined ) {
  console.log(Cookies.get('token'))
  tmp1 = jwt_decode(Cookies.get('token')).id
  tmp2 = jwt_decode(Cookies.get('token')).username
} else {
  tmp1 = null
  tmp2 = null
} */
let tempo

if (Cookies.get('token') == undefined){
  tempo = {
    loading: false,
    isAuth: false,
    id: null,
    typeUser: '',
    error: ''
  }
}
else{
  tempo = {
    loading: false,
    isAuth: true,
    id: jwt_decode(Cookies.get('token'))['sub'],
    typeUser: jwt_decode(Cookies.get('token'))['scp']
  } 
}



const initialState = tempo

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      } 
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        id: action.id,
        typeUser: action.typeUser,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: false,
        id: null,
        username: null
      }
    default:
      return {
        ...state
      }
  }
}

export default authReducer
