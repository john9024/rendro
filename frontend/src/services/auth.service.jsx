import message from "@/reducers/message";
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  console.log(username, email, password);
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
  // .then((response) => {
  //   console.log('res', response.data)
  //   return response.data;
  // });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      // if (response.data.accessToken) {
        sessionStorage.setItem("user", JSON.stringify(response.data));
        console.log('user',sessionStorage.getItem("user").username);
      // }
     
      // console.log('======================>')
      // console.log(response.data);
      return response.data;
    });
};

const updateuser = (firstname, lastname, address, phone, password) => {
  // console.log('res', '111111');
  return axios
    .post(API_URL + "update", {
      firstname,
      lastname,
      address,
      phone,
      password,
    })
    .then((response) => {
      console.log('res', '111111');
      console.log('message', message);
      return response.data;
    });
};

const logout = () => {
  sessionStorage.removeItem("user");
};

export default {
  register,
  login,
  updateuser,
  logout,
};