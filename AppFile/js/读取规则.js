######读取订阅列表25
eval(e2Rex(getVar("qjs"),'.dn64()'));
var filename='远程订阅索引.txt';
if(_.read(filename)){
    var code=_.read(filename).match(/.+?,.+/g);
}else{
    var data="InMemory,https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/rule/app.txt#https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/FileGit/icon/InMemory.jpg";
    _.write(data,filename);
    var code=_.read(filename).match(/.+?,.+/g);
}
var items=[];
for (var i in code){
    var title=e2Rex(code[i],".tz(,)");
    var url=e2Rex(code[i],".t()");
    var img=e2Rex(code[i],".ty(#)");
    if(img){
        var img=img;
    }else{
        var img="http://1.117.152.239:39000/tupian.php?text="+title;
    }
    items.push({title:title,url:url,img:img});
}
JSON.stringify(items);

######读取规则列表25
eval(e2Rex(getVar("qjs"),'.dn64()'));
var filename='远程订阅索引.txt';
var ff="本地,#\n"+_.read(filename);
var code=ff.match(/.+?,.+/g);
var items=[];
for (var i in code){
    var title=e2Rex(code[i],".tz(,)");
    var Fname=title+".json";
    var img=e2Rex(code[i],".ty(#)");
    if(img){
        var img=img;
    }else{
        var img="http://1.117.152.239:39000/tupian.php?text="+title;
    }
    if(_.read(Fname)){
        var Curl=JSON.parse(_.read(Fname));
        items.push({title:title,img:img,Curl:Curl});
    }
}
JSON.stringify(items);

######读取依赖列表25
eval(e2Rex(getHttp('https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/js/q.js'),'.dn64()'));
var filename='依赖文件索引.txt';
if(_.read(filename)){
    var code=_.read(filename).match(/.+?,.+/g);
}else{
    var data="APP影视,https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/APP影视.js\n写入规则,https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/rule/写入规则.js\n删除规则,https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/rule/删除规则.js\n读取规则,https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/rule/读取规则.js\n选集规则,https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/rule/选集规则.js\n读取规则,https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/rule/解析规则.js\n q.js,https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/rule/q.js";
    _.write(data,filename);
    var code=_.read(filename).match(/.+?,.+/g);
}
var items=[];
for (var i in code){
    var title=e2Rex(code[i],".tz(,)");
    var url=e2Rex(code[i],".t()");
    var img="http://1.117.152.239:39000/tupian.php?text="+title;
    items.push({title:title,url:url,img:img});
}
JSON.stringify(items);