import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3000/api",
  // baseURL: "https://apollo-expeditions.onrender.com/api",
  baseURL: "https://apollo-expeditions-kdga.onrender.com/api",
});

export default instance;
