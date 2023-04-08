import axios from "axios";
import { func } from "prop-types";

const API_URL = "http://localhost:8080/api/diningroom";

const pullimg = () => {
  return axios
    .get(API_URL + "pullout")
    .then((response) => {
      // if (response.data.accessToken) {
        sessionStorage.setItem("diningroom", JSON.stringify(response.data));
        console.log('diningroom',sessionStorage.getItem("diningroom"));
      // }
      
      return console.log('res', response.data);
    });
  };

const pushimg = () => {
  return axios
    .post(API_URL + "push", {
        image
    })
    .then((response) => {
        console.log('message', message);
        return response.data;
    });
};

export default {
  pullimg,
  pushimg,
};