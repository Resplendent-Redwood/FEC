const axios = require('axios');
const auth_token = require('../../authorization.config.js').token;

var options = {
  headers: {
    'Authorization': auth_token
  }
}
var url = 'ec2-54-153-12-179.us-west-1.compute.amazonaws.com/products';

var productController = {
  getAllProducts: () => {
   return new Promise((resolve, reject) => {
     axios.get(url, options)
       .then(result => {
         resolve(result.data);
       })
       .catch(err => {
         reject(err);
       })
     });
  },
  getProductById: (id) => {
    return new Promise((resolve, reject) => {
      axios.get(url + `/${id}`, options)
        .then(result => {
          resolve(result.data);
        })
        .catch(err => {
          reject(err);
        })
      });
  },
  getProductStyles: (id) => {
    return new Promise((resolve, reject) => {
      axios.get(url + `/${id}/styles`, options)
        .then(result => {
          resolve(result.data);
        })
        .catch(err => {
          reject(err);
        })
      });
  },
  getRelatedProductIds: (id) => {
    return new Promise((resolve, reject) => {
      axios.get(url + `/${id}/related`, options)
        .then(result => {
          resolve(result.data);
        })
        .catch(err => {
          reject(err);
        })
      });
  }
}

module.exports.productController = productController;