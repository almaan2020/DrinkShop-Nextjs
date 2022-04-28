import axios from "axios";
import logger from "./logService";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    alert("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});


const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
export default http;