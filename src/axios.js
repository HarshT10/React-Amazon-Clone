import axios from "axios";

const instance = axios.create({
  // API Cloud Function URL
  baseURL: "https://us-central1-clone-fcd24.cloudfunctions.net/api",
  // "http://127.0.0.1:5001/clone-fcd24/us-central1/api"
});

export default instance;
