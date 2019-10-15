var db=require('../dbconnection');
var user={
    getUserById:function(email,callback){
        return db.query('select * from user where id=?',[email],callback);
    },
    getAllUser:function(callback){
        return db.query('select * from user',callback);
    },
    addUser:function(item,callback){
        return db.query('insert into user values(?,?)',[item.email,item.password],callback);
    },
    deleteUser:function(email,callback){
        return db.query('delete from user where email=?',email,callback);
    }
}
module.exports=user;