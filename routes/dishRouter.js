const express= require('express');
const bodyParser=require('body-parser');
const { append } = require('express/lib/response');

const dishRouter=express.Router({ mergeParams: true });

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.get((req,res,next) =>{
    res.send('will send you details of the dish: '+ req.params.dishID+'to you');
})
.post((req,res,next) =>{
    res.statusCode = 403;
    res.end('post operation is not supported on /dishes/'+req.params.dishID);
})
.put((req,res,next) =>{
    res.write('updating the dish '+req.params.dishID+'\n');
    res.end('will update the dish :'+req.body.name+' with details '+req.body.description);
})
.delete((req,res,next) =>{
    res.end('deleting the dish: '+req.params.dishID);
})
.all((req,res,next) =>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
});
module.exports=dishRouter;

