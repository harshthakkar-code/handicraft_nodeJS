var express=require('express');
var router=express.Router();
var user=require('../public/models/user_tbl_module');
      
router.get('/',function(req,res,next){
    user.getAllUser(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){
    user.addUser(req.body,function(err,row){
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }
    });
});

router.delete('/:email',function(req,res,next){
    user.deleteUser(req.params.email,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;  