const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/to_do_list_rinkesh');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Successfully Connected to DataBase");
});