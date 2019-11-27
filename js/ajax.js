//要封装一个函数，保存重用的代码：
//1. 代码中所有不确定的，都定义为形参变量！
//2. 所有不一定执行的代码，都要加判断条件。

//三个参数:
//1. url: 要请求的目标服务端接口地址
//2. type: 不同的请求类型
//3. callback: 是调用者自定义的一个函数，会在调用时提前传入ajax函数内部，但是不是立刻执行。而是等相应回来后，自动执行。——因为我把callback()写在了onreadystatechange中。
//4. data: 要发送的参数, 要求，必需是:
//  "变量1=值1&变量2=值2&..."
//   不要带问号
//  且必需是字符串
//强调: 回调函数，总是需要的，因为相应结果都要处理！
//     但是就不是所有请求都带参数！
//     data有时候需要有，有时候没有。
//     将来，凡是有可能有，有可能没有的形参，都必须放在形参列表的结尾。
//     因为函数调用时，中间是不能缺参数的！
//     比如: ajax(url, type, callback )//没有第四个data参数值。如果没有第四个参数值，则ajax内的data变量获得的就是undefined
//         ajax(url, type,    , callback) //编译错误
function ajax({url,type="get",data}){
                    //  door    err
  return new Promise(function(resolve,reject){
    var xhr=new XMLHttpRequest();//不变！
    //如果发送get请求时，带参数
    if(type=="get"&&data!==undefined){
      //则需要将参数用?连接到url地址结尾
      url+="?"+data;
    }
    xhr.open(type,url,true);
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4){
        var result=JSON.parse(xhr.responseText)
      //door(result);
        resolve(result);//开门，并将结果，反馈到外部！功能类似于普通函数的return
      }
    }
    if(type=="post"){//只有发送的是post请求时，才需要添加请求头
      xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    }
    if(type=="post"){//只有post请求，才会将参数放在send()中发送
      xhr.send(data);
    }else{//而如果是get请求，send()中什么都没有
      xhr.send();
    }
  })
}