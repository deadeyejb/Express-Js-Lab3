const express=require('./config/express');
const app=express();

app.listen(3001);
module.exports=app;

console.log('server running at http://localhost:3001/');
