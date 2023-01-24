const express= require('express');
const bodyParser=require('body-parser');
const { append } = require('express/lib/response');

const promoRouter=express.Router({ mergeParams: true });

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.get((req,res,next) =>{
    res.end('will send you all the promotions');
})
.post((req,res,next) =>{
    res.end('will add the promotion'+ req.body.name + 'and the details'+req.body.description);
})
.put((req,res,next) =>{
    res.statusCode=403;
    res.end('put operation is not supported on /promotions');
})
.delete((req,res,next) =>{
    res.end('deleting all the promotions');
});

promoRouter.route('/:promoID')
.get((req,res,next) =>{
    res.end('will send you details of the promotion: '+ req.params.promoID+'to you');
})
.post((req,res,next) =>{
    res.end('will add the promotion'+ req.body.name + 'and the details'+req.body.description);
})
.put((req,res,next) =>{
    res.statusCode=403;
    res.end('put operation is not supported on /promotions');
})
.delete((req,res,next) =>{
    res.end('deleting all the promotions');
});


module.exports=promoRouter;