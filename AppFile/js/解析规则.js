var uu=getVar("url");
var resp=JZ(JSON.stringify({url:uu,redirect:false,head:{"User-Agent":"Mozilla/5.0 Android"}}));
if(uu.indexOf("baidu.com")!=-1){
    var playurl=uu.split("wd=")[1];
    if(playurl.indexOf("duoduozy.com")!=-1||playurl.indexOf("m3u8.cache.suoyo.cc")!=-1){
        "web=https://jhpc.manduhu.com/duoduo/?url="+playurl+'@{"Referer":"https://555dy3.com"}';
    }else if(playurl.indexOf("ruifenglb")!=-1){
        var resp=JZ(JSON.stringify({url:"http://jx.yjhan.com:8090/home/api?type=ys&uid=268886&key=afghilnyEGKPRTVY56&url="+playurl}));
        JSON.stringify({url:JSON.parse(resp.code).url,head:{"referer":"https://1.ruifenglb.com/","User-Agent":""}});
    }else if(playurl.indexOf("xfy")!=-1){
        var resp=JZ(JSON.stringify({url:playurl}));
        JSON.stringify({url:JSON.parse(resp.code).url,head:{"referer":"appguapi.lihaoyun.top:11543","User-Agent":"Dart/2.14 (dart:io)"}});
    }else if(playurl.indexOf("cat.wkfile.com")!=-1){
        JSON.stringify({url:playurl,head:{"User-Agent":"Lavf/58.12.100","Referer":"wkfile.com"}});
    }else if(playurl.indexOf("=")==-1&&playurl.indexOf(".m3u8")>15||playurl.indexOf(".mp4")>15||playurl.indexOf("/obj/tos")!=-1){
        if(playurl.indexOf("hsl.ysgc.xyz")!=-1){
            var cccc=JZ(JSON.stringify({url:"https://play.dushe520.com/m3u8.php?url="+playurl}));
            JSON.stringify({url:JSON.parse(cccc.code).url,head:{"Referer":"https://ysgc.cc"}});
        }else{
            JSON.stringify({url:playurl.match(/.*(http.*)/)[1]});
        }
    }else if(playurl.indexOf("=")!=-1){
        var resp=JZ(JSON.stringify({url:playurl,redirect:false}));
        if(resp.head.location||resp.head.Location){
            var a=resp;
            while(a.head.location||a.head.Location){
                var finalurl=a.head.location||a.head.Location;
                if(finalurl.indexOf(".mp4")>30){
                    var a={"head":{"cookie":"ccccc"}};
                }else{
                    var a=JZ(JSON.stringify({url:finalurl,redirect:false,head:{"User-Agent":"Mozilla/5.0 Android"}}));
                }
            }
            var realurl=finalurl;
            if(realurl.indexOf("=http")!=-1||realurl.indexOf("url=")!=-1){
                if(a.code.indexOf("<html")!=-1){
                    "web="+realurl;
                }else{
                    var ppurl=JSON.parse(a.code).url;
                    if(realurl.indexOf("mgtv.com")!=-1){
                        JSON.stringify({url:ppurl,head:{"User-Agent":"Mozilla/5.0","Referer":""}});
                    }else if(realurl.indexOf("bilibili.com")!=-1){
                        JSON.stringify({url:ppurl});
                    }else{
                        JSON.stringify({url:ppurl});
                    }
                }
            }else{
                if(playurl.indexOf("www.mgtv.com")!=-1){
                    JSON.stringify({url:realurl,head:{"User-Agent":"Mozilla/5.0","Referer":""}}); 
                }else{
                    JSON.stringify({url:realurl});
                }
            }
        }else{
            function 切换解析(data){
                if(data.split("url=")[1].indexOf("http")!=-1){
                    return "web=http://1.117.152.239:39000/?url="+data.split("url=")[1];
                }else if(data.split("url=")[1].indexOf("renrenmi")!=-1){
                    return "web=https://jx.blbo.cc:4433/?url="+data.split("url=")[1];
                }else if(data.split("url=")[1].indexOf("LT-")!=-1){
                    return "web=https://analysis.yikan.one/analysis/player/?uid=8&my=fjkmoqFJLORTVZ1359&url="+data.split("url=")[1];
                }else{
                    return "web=http://1.117.152.239:39000/?url="+data.split("url=")[1];
                }
            }
            if(resp.code.indexOf("<html")!=-1){
                if(resp.code.search(/player=new/)!=-1||resp.code.search(/<div id="video"/)!=-1||resp.code.search(/<div id="[^"]*?player"/)!=-1||resp.code.search(/\/\/视频链接/)!=-1||resp.code.search(/<iframe[\s\S]*?src="[^"]+?"/)!=-1||resp.code.search(/<video[\s\S]*?src="[^"]+?"/)!=-1){
                   "web="+playurl;
                }else{
                   切换解析(playurl);
                }
            }else{
                if(e2Rex(resp.code,".json(url).or().json(data).json(url)").length>1){
                    var realurl=JSON.parse(resp.code).url||JSON.parse(resp.code).data.url;
                    if(playurl.indexOf("mgtv.com")!=-1){
                        JSON.stringify({url:realurl,head:{"User-Agent":"Mozilla/5.0","Referer":""}});
                    }else if(playurl.indexOf("bilibili.com")!=-1){
                        JSON.stringify({url:realurl});
                    }else{
                        JSON.stringify({url:realurl});
                    }
                }else{
                    切换解析(playurl);
                }
            }
        }
    
    }
}else{
    "web="+uu;
}