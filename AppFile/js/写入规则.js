eval(getVar("qjs"));
var key=getVar("KEY");
var Url=getVar("url");
var uurl=(getVar("CODE"),".json().json(url)");
var 记录=[];
if(key.length>10){
    if(key.indexOf(",http")>1&&key.indexOf("#")){
        var SubTitle=e2Rex(key,".tz(,)");
        var subfilename='远程订阅索引.txt';
        订阅记录=key.match(/.+?,http.+/g);
        if (_.read(subfilename)){
            var 订阅旧记录=_.read(subfilename).match(/.+?,http.+/g);
            var 订阅新记录=订阅记录.concat(订阅旧记录.filter(item=>item!=订阅记录[0]));
        } else {
            var 订阅新记录=订阅记录;
        }
        _.write(订阅新记录.join("\n"),subfilename);
        var SubUrl=e2Rex(key,".ty(,).tz(#)");
        var filename=SubTitle+".json";
        var rule=getHttp(JSON.stringify({url:SubUrl}));
        if(rule.indexOf("api.php/app")!=-1||rule.indexOf("xgapp")!=-1||rule.indexOf(".vod")!=-1||rule.search(/api\.php\/.+?\/vod\//)!=-1){
            var 输入条目=rule.match(/.+=http.+/g);
            for(var j in 输入条目){
                var title=e2Rex(输入条目[j],".ty(@).tz(=)");
                var url=e2Rex(输入条目[j],".ty(=).tz(#)");
                var img=e2Rex(输入条目[j],".ty(#)");
                if(img.indexOf("http")!=-1){
                    var img=img;
                }else if(img==""){
                    var img="https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/AppIcon/通用图标.png"
                }else{
                    var img="https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/AppIcon/"+img+".png";
                }
                if(url.search(/api\.php\/.*?\/vod/)!=-1){
                    var murl="q:TV影视";
                }else{
                    var murl="q:APP影视";
                }
                if(e2Rex(输入条目[j],".tz(@)")!=""){
                    var type=e2Rex(输入条目[j],".tz(@)");
                }else if(url.indexOf("api.php/app")!=-1||url.indexOf("xgapp")!=-1){
                    var type="小龟";
                }else if(url.indexOf(".vod")!=-1){
                    var type="萝卜/白菜/木白/绿豆";
                }else if(url.search(/api\.php\/.+?\/vod\//)!=-1){
                    var type="神马";
                }
                记录.push({title:title,url:url,img:img,murl:murl,type:type});
            }
            if(_.read(filename)){
                var 新记录=JSON.parse(_.read(filename));
            }else{
                var 新记录=[];
            }
            for(var i in 记录){
                var 当前条目=[];当前条目.push(记录[i]);
                if(新记录.length==0) {
                    新记录.push({title:记录[i].type,data:当前条目});
                }else{
                    let res=新记录.some(item=>{
                    //判断类型，有就添加到当前项
                        if(item.title == 记录[i].type){
                            item.data=当前条目.concat(item.data.filter(d=>d.url!=记录[i].url));
                            return true
                        }
                    });
                    if (!res) {
                    //如果没找相同类型添加一个类型
                        新记录.push({title:记录[i].type,data:当前条目});
                    }
                }
            }
            _.write(JSON.stringify(新记录),filename);
        }else{
            alert(SubTitle+"\n订阅内容没有符合的规则或订阅地址失效");
        }
        alert(SubTitle+"订阅成功\nAPP列表已写入本地");
        _.read(subfilename);
    }else if(key.indexOf("@")!=-1&&key.indexOf("=")!=-1&&key.indexOf("#")!=-1){
        if(key.indexOf("api.php/app")!=-1||key.indexOf("xgapp")!=-1||key.indexOf(".vod")!=-1||key.search(/api\.php\/.+?\/vod\//)!=-1){
            var filename='本地.json';
            var 输入条目=key.match(/.+=http.+/g);
            for(var j in 输入条目){
                var title=e2Rex(输入条目[j],".ty(@).tz(=)");
                var url=e2Rex(输入条目[j],".ty(=).tz(#)");
                var img=e2Rex(输入条目[j],".ty(#)");
                if(img.indexOf("http")!=-1){
                    var img=img;
                }else if(img==""){
                    var img="https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/AppIcon/通用图标.png"
                }else{
                    var img="https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/AppIcon/"+img+".png";
                }
                if(url.search(/api\.php\/.*?\/vod/)!=-1){
                    var murl="q:TV影视";
                }else{
                    var murl="q:APP影视";
                }
                if(e2Rex(输入条目[j],".tz(@)")!=""){
                    var type=e2Rex(输入条目[j],".tz(@)");
                }else if(url.indexOf("api.php/app")!=-1||url.indexOf("xgapp")!=-1){
                    var type="小龟";
                }else if(url.indexOf(".vod")!=-1){
                    var type="萝卜";
                }else if(url.search(/api\.php\/.+?\/vod\//)!=-1){
                    var type="神马";
                }
                记录.push({title:title,url:url,img:img,murl:murl,type:type});
            }
            if(_.read(filename)){
                var 新记录=JSON.parse(_.read(filename));
            }else{
                var 新记录=[];
            }
            for(var i in 记录){
                var 当前条目=[];当前条目.push(记录[i]);
                if(新记录.length==0){
                    新记录.push({title:记录[i].type,data:当前条目});
                }else{
                    let res=新记录.some(item=>{
                        if(item.title==记录[i].type){
                            item.data=当前条目.concat(item.data.filter(d=>d.url!=记录[i].url));
                            return true
                        }
                    });
                    if(!res){
                        新记录.push({title:记录[i].type,data:当前条目});
                    }
                }
            }
            _.write(JSON.stringify(新记录),filename);
            alert("本地规则写入成功");
            _.read(filename);
        }
    }else{
        alert("请输入以下格式\n\n1.[订阅名,订阅地址#图片地址]格式的网络订阅\n2.[分类名@APP名称=APP接口地址#图片地址]格式的规则\n详情请查看首页轮播内的教程");
    }
}else if(Url.indexOf(".js")!=-1){
    if(Url.index(',http')!=-1&&Url.indexOf("#")!=-1){
        var title=e2Rex(Url,".tz(,)");
        var filename=title+'.js';
        var url=e2Rex(Url,".ty(,).tz(#)");
    }else{
        var title=e2Rex(Url,".ty2(/)");
        var url=Url;
        var filename=e2Rex(Url,".ty2(/)");
    }
    var code=getHttp(url);
    _.write(code,filename);
    alert(title+'\n下载/更新成功');
    _.read(filename);
}else if(Url.indexOf(",http")!=-1||uurl.indexOf(",http")!=-1){
    if(uurl.indexOf(",http")!=-1){
        var SubUrl=e2Rex(Url,".ty(,).tz(#)");
        var SubTitle=e2Rex(Url,".tz(,)");
        var filename=SubTitle+".json";
    }else if(Url.indexOf(",http")!=-1){
        var SubUrl=e2Rex(Url,".ty(,).tz(#)");
        var SubTitle=e2Rex(Url,".tz(,)");
        var filename=SubTitle+".json";
    }
    var rule=getHttp(JSON.stringify({url:SubUrl}));
    if(rule.indexOf("api.php/app")!=-1||rule.indexOf("xgapp")!=-1||rule.indexOf(".vod")!=-1||rule.search(/api\.php\/.+?\/vod\//)!=-1){
        var 输入条目=rule.match(/.+=http.+/g);
        for(var j in 输入条目){
            var title=e2Rex(输入条目[j],".ty(@).tz(=)");
            var url=e2Rex(输入条目[j],".ty(=).tz(#)");
            var img=e2Rex(输入条目[j],".ty(#)");
            if(img.indexOf("http")!=-1){
                var img=img;
            }else if(img==""){
                var img="https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/AppIcon/通用图标.png"
            }else{
                var img="https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/AppIcon/"+img+".png";
            }
            if(url.search(/api\.php\/.*?\/vod/)!=-1){
                var murl="q:TV影视";
            }else{
                var murl="q:APP影视";
            }
            if(e2Rex(输入条目[j],".tz(@)")!=""){
                var type=e2Rex(输入条目[j],".tz(@)");
            }else if(url.indexOf("api.php/app")!=-1||url.indexOf("xgapp")!=-1){
                var type="小龟";
            }else if(url.indexOf(".vod")!=-1){
                var type="萝卜/白菜/木白/绿豆";
            }else if(url.search(/api\.php\/.+?\/vod\//)!=-1){
                var type="神马";
            }
            记录.push({title:title,url:url,img:img,murl:murl,type:type});
        }
        if(_.read(filename)){
            var 新记录=JSON.parse(_.read(filename));
        }else{
            var 新记录=[];
        }
        for(var i in 记录){
            var 当前条目=[];当前条目.push(记录[i]);
            if(新记录.length==0) {
                新记录.push({title:记录[i].type,data:当前条目});
            }else{
                let res=新记录.some(item=>{
                //判断类型，有就添加到当前项
                    if(item.title == 记录[i].type){
                        item.data=当前条目.concat(item.data.filter(d=>d.url!=记录[i].url));
                        return true
                    }
                });
                if (!res) {
                //如果没找相同类型添加一个类型
                    新记录.push({title:记录[i].type,data:当前条目});
                }
            }
        }
        _.write(JSON.stringify(新记录),filename);
        alert("订阅更新成功");
        _.read(filename);
    }
}else{
    alert("请输入以下格式\n\n1.[订阅名,订阅地址#图片地址]格式的网络订阅\n2.[分类名@APP名称=APP接口地址#图片地址]格式的规则\n详情请查看首页轮播内的教程");
}