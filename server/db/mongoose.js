process.env.MONGODB_URI = "mongodb://<dbuser>:<dbpassword>@ds149742.mlab.com:49742/mongoose-for-node"

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
