const express= require('express');
const bodyParser=require('body-parser');
const { append } = require('express/lib/response');

const leaderRouter=express.Router({ mergeParams: true });

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.get((req,res,next) =>{
    res.end('will send you all the leaders');
})
.post((req,res,next) =>{
    res.end('will add the leader'+ req.body.name + 'and the details'+req.body.description);
})
.put((req,res,next) =>{
    res.statusCode=403;
    res.end('put operation is not supported on /leaders');
})
.delete((req,res,next) =>{
    res.end('deleting all the leaders');
});

leaderRouter.route('/:leaderID')
.get((req,res,next) =>{
    res.send('will send you details of the leader: '+ req.params.leaderID+'to you');
})
.post((req,res,next) =>{
    res.statusCode = 403;
    res.end('post operation is not supported on /leader/'+req.params.leaderID);
})
.put((req,res,next) =>{
    res.write('updating the leader '+req.params.leaderID+'\n');
    res.end('will update the leader :'+req.body.name+' with details '+req.body.description);
})
.delete((req,res,next) =>{
    res.end('deleting the leaders: '+req.params.leaderID);
});
module.exports=leaderRouter;