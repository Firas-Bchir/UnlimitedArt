var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'east'
});
         /* Db Connection*/

connection.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
  });

module.exports={
  connection
}