const express=require('express');
//引入连接池模块
const pool=require('../js/pool.js');
//创建路由器对象 
var router=express.Router();
//添加路由
router.get('/index',function(req,res){
    //1.1获取数据
    console.log(req);
    //1.3执行SQL语句 
    pool.query('select * from tcdj_index_lunbo',function(err,result){
      if(err) throw err;
      console.log("index",result);
      //插入成功
      res.send(result);
    })
  });
  router.get('/indexlunbo',function(req,res){
    //1.1获取数据
    console.log(req);
    //1.3执行SQL语句 
    pool.query('select * from tcdj_index_xlunbo',function(err,result){
      if(err) throw err;
      console.log("index",result);
      //插入成功
      res.send(result);
    })
  });
  module.exports=router;