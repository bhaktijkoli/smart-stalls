import axios from 'axios';

module.exports.makePost = (url, data) => {
  var fullurl = 'http://192.168.4.1' + url;
  console.log("Sending request to", fullurl);
  return axios.post(fullurl, data);
}
