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
router.get('/:email',function(req,res,next){
    customer.getCustomerByEmail(req.params.email,function(err,row){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(row);
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

router.put('/:email',function(req,res,next){
    customer.updateCustomer(req.params.email,req.body,function(err,row){
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }
    });
});

module.exports=router;