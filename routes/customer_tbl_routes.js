var express=require('express');
var router=express.Router();
var customer=require('../public/models/customer_tbl_model');

router.get('/',function(req,res,next){
     customer.getAllCustomer(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){
    customer.addCustomer(req.body,function(err,row){
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }
    });
});

router.delete('/:email',function(req,res,next){
    customer.deleteCustomer(req.params.email,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;