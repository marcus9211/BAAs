const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaderes to you! router');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaderes');
})
.delete((req, res, next) => {
    res.end('Deleting all leaderes');
});

leaderRouter.route("/:leaderId")
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res)=>{
res.end(`leaderes with leader id ${req.params.leaderId} will be served`);
})
.post((req, res)=>{
    res.end("invalid operation");
})
.put((req,res)=>{
    res.end(`leader with leader id ${req.params.leaderId} will be updated`);
})
.delete((req, res)=>{
res.end(` leader with leader id ${req.params.leaderId} will be deleted`);
})

module.exports = leaderRouter;