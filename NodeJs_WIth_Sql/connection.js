const mysql = require('mysql2');
var mysqlConnection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'nodemysql'

})

mysqlConnection.connect((err)=>{
    if(err)
    {
        console.log("Error"+JSON.stringify(err,undefined,2));
    }
    else{
        resizeBy.send(rows);
    }

})

module.exports=mysqlConnection