eval(getVar("qjs"));
var url=getVar("url");
var filename='远程订阅索引.txt';
var items=[];
if(url.indexOf("订阅")!=-1){
    if(_.read(filename)){
        var code=_.read(filename).match(/.+?,.+/g);
    }else{
        var data="内置,https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/rule/app.txt#";
        _.write(data,filename);
        var code=_.read(filename).match(/.+?,.+/g);
    }
    for (var i in code){
        var title=e2Rex(code[i],".tz(,)");
        var Fname=title+".json";
        var url=e2Rex(code[i],".t()");
        var img=e2Rex(code[i],".ty(#)");
        if(img){
            var img=img;
        }else{
            var img="http://1.117.152.239:39000/tupian.php?text="+title;
        }
        if(_.read(Fname)){
            var Curl=JSON.parse(_.read(Fname));
            items.push({title:title,img:img,url:url,Curl:Curl});
        }else{
            items.push({title:title,img:img,url:url});
        }
    }
    JSON.stringify(items);
}else if(url.indexOf("本地")!=-1){
    var ff="本地,#\n"+_.read(filename);
    var code=ff.match(/.+?,.+/g);
    for (var i in code){
        var title=e2Rex(code[i],".tz(,)");
        var Fname=title+".json";
        var url=e2Rex(code[i],".ty(,).tz(#)");
        var img=e2Rex(code[i],".ty(#)");
        if(img){
            var img=img;
        }else{
            var img="http://1.117.152.239:39000/tupian.php?text="+title;
        }
        if(_.read(Fname)){
            var Curl=JSON.parse(_.read(Fname));
            items.push({title:title,img:img,url:url,Curl:Curl});
        }
        JSON.stringify(items);
    }
}