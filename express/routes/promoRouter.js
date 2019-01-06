const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you! router');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});

promotionRouter.route("/:promotionId")
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res)=>{
res.end(`promotions with promotion id ${req.params.promotionId} will be served`);
})
.post((req, res)=>{
    res.end("invalid operation");
})
.put((req,res)=>{
    res.end(`promotion with promotion id ${req.params.promotionId} will be updated`);
})
.delete((req, res)=>{
res.end(` promotion with promotion id ${req.params.promotionId} will be deleted`);
})

module.exports = promotionRouter;