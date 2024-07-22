const axios = require('axios');
const Promise = require('bluebird');
module.exports = {
    getRecipes(req, res) {
        const url = "http://localhost:8080/api/messages"
        const token = "IUzI1NiIsInR5c"
  
        axios
        .get(url, {
          "headers": {"Authorization": "Bearer " + token}
        })
        .then(response => {
          //console.log(response)
          //res.send(response) // <= send data to the client
          return response;
        })
        .catch(err => {
          //console.log(err)
          //res.send({ err }) // <= send error
          return err;
        })
    }
  }