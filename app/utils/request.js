import axios from 'axios';

module.exports.makePost = (url, data) => {
  var fullurl = 'http://168.192.1.4' + url;
  return axios.post(fullurl, data);
}
