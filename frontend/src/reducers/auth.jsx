import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    UPDATE,
    UPDATE_PROFILE,
  } from "../actions/types";
    
  const user = JSON.parse(sessionStorage.getItem("user"));
  
  const initialState = user
    ? { isLoggedIn: true, 
        isUpdated: false, 
        user, 
      }
    : { isLoggedIn: false, isUpdated: false, user: null };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          isUpdated: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          isUpdated: false,
          user: payload,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          isUpdated: false,
          user: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          isUpdated: false,
          user: null,
        };
      case UPDATE:
        return {
          ...state,
          user: payload,
          isUpdated: true,
        };
      case UPDATE_PROFILE:
        return {
          ...state,
          user: payload,
        };
    }
    return state;
  }