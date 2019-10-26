import axios from 'axios';
// You can use any cookie library or whatever
// library to access your client storage.

axios.interceptors.response.use(function (response) {
    // Do something with response 
    return response;
  }, function (error) {
    // Do something with response error
    if(error.response.status === 403) { console.log("Redirection needed !"); }
     console.log("error--------------------")
    // Trow errr again (may be need for some other catch)
    return Promise.reject(error);
});

export default axios