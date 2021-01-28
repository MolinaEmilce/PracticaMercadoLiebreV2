const  fs = require('fs');
//nos parsea el json
module.exports = JSON.parse(fs.readFileSync(__dirname + '/productsDataBase.json','utf-8'));