var mysql=require('mysql');
var con=mysql.createPool({
    host:'localhost' ,user:'root',password:'',database:'mini_pro'
});
module.exports=con;