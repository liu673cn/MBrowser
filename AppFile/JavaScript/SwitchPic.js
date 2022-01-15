var update=getVar("版本更新");
var NewVersion="20211120";
var version=e2Rex(getVar("QMINFO"),".xml(version).z(\\d+)");
var appSign="8c1a742e9f9c4ee5b9ec18fa642b32c5";
var sign=e2Rex(getVar("QMINFO"),".xml(sign).t()").replace(/\s/g,"");
var filename=e2Rex("aHR0cHM6Ly9pbm1lbW9yeS5jb2RpbmcubmV0L3AvSW5NZW1vcnkvZC9BcHBGaWxtL2dpdC9yYXcvbWFzdGVyL+WIl+ihqC5qc29u",".t().dn64()");
var appName="APP影视.js";
var name=e2Rex(getVar("QMINFO"),".xml(name).t()").replace(/\s/g,"");
if(version==NewVersion&&sign==appSign&&name==appName){
    var 原=getHttp(JSON.stringify({url:filename})).replace(/\s/g,"");
    var 分类=e2Arr(原,".z(\\{[^{]+?\\})");
    var newArr=分类.filter(item=>item.indexOf("api.php/app")!=-1||item.indexOf("xgapp.php/v1")!=-1||item.indexOf(".vod")!=-1);
    var 随机=newArr[Math.floor(Math.random()*newArr.length)];
    var 随机网址=e2Rex(随机,".json(url)");
    if(随机网址.search(/api\.php\/app/)!=-1||随机网址.search(/xgapp\.php\/v1/)!=-1){
        var 前缀=随机网址;
        var CODE=getHttp(JSON.stringify({url:前缀+"advert?token=&position=2",head:{"user-agent":"Dart/2.13 (dart:io)"}}));
    }else{
        var 前缀=随机网址;
        var CODE=getHttp(JSON.stringify({url:前缀+"?level=9",head:{"user-agent":"okhttp/4.1.0"}}));
    }
    while(CODE.indexOf("http")==-1){
        随机=newArr[Math.floor(Math.random()*newArr.length)];
        随机网址=e2Rex(随机,".json(url)");
        if(随机网址.search(/api\.php\/app/)!=-1||随机网址.search(/xgapp\.php\/v1/)!=-1){
            前缀=随机网址;
            CODE=getHttp(JSON.stringify({url:前缀+"advert?token=&position=2",head:{"user-agent":"Dart/2.13 (dart:io)"}}));
        }else{
            前缀=随机网址;
            CODE=getHttp(JSON.stringify({url:前缀+"?level=9",head:{"user-agent":"okhttp/4.1.0"}}));
        }
    }
    var 随机网址=e2Rex(随机,".json(url)");
    if(随机网址.search(/api\.php\/app/)!=-1||随机网址.search(/xgapp\.php\/v1/)!=-1){
        var 前缀=随机网址;
        var CODE=getHttp(JSON.stringify({url:前缀+"advert?token=&position=2",head:{"user-agent":"Dart/2.13 (dart:io)"}}));
        var 轮播=e2Arr(CODE,".json(data)");
        var items=[];
        for(var i=0;i<轮播.length;i++){
            if(前缀.indexOf("dijiaxia")!=-1){
                var 替换=前缀.replace("xgapp.php","api.php").replace("v1","app");
                var url=替换+"video_detail?id="+e2Rex(轮播[i],".json(req_content)");
            }else{
                var url=前缀+"video_detail?id="+e2Rex(轮播[i],".json(req_content)");
            }
            var img=e2Rex(轮播[i],".json(content)");
            var title=e2Rex(轮播[i],".json(name)");
            items.push({url:"q:播放器?url="+url,img:img,title:title})
        }
        JSON.stringify(items);
    }else{
        var 前缀=随机网址;
        var CODE=getHttp(JSON.stringify({url:前缀+"?level=9",head:{"user-agent":"okhttp/4.1.0"}}));
        var 轮播=e2Arr(CODE,".json(data).json(list)");
        var items=[];
        for(var i=0;i<轮播.length;i++){
            var url=前缀+"/detail?vod_id="+e2Rex(轮播[i],".json(vod_id)");
            var img=e2Rex(轮播[i],".json(vod_pic_slide)");
            var title=e2Rex(轮播[i],".json(vod_name)");
            items.push({url:"q:播放器?url="+url,img:img,title:title})
        }
        JSON.stringify(items);
    }
}else{
    e2Rex(update,".json(data).i(2)");
}