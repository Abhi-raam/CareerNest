import axios from 'axios'
const instance = axios.create({
    baseURL: "http://ashmiil.pythonanywhere.com/",
  });

  export default instance