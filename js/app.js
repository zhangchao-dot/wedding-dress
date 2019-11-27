const express=require("express");
const bodyParser=require('body-parser');
//引入cors文件

const cors=require("cors");

//引入路由文件
const regRouter=require('../routes/register.js');
const logRouter=require('../routes/login.js');
const indexRouter=require('../routes/index.js');
//服务器监听的端口
var app=express();
app.listen(5050);

//解决跨域问题
app.use(cors({
  origin:['http://localhost:8080','http://127.0.0.1:5500'],
  credentials:true
}))
//使用body-parser中间件
app.use( bodyParser.urlencoded({
    extended:false
  }) );
  //静态托管个人项目下的网页
app.use(express.static('../../个人项目') );
//挂载路由文件
app.use('/register',regRouter);
app.use('/login',logRouter);
app.use('/index',indexRouter);
app.use('/index1',indexRouter);