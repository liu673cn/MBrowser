var uu=getVar("url");
var resp=JZ(JSON.stringify({url:uu,redirect:false,head:{"User-Agent":"Mozilla/5.0 Android"}}));
if(uu.indexOf("baidu.com")!=-1){
    var playurl=uu.split("wd=")[1];
    if(playurl.indexOf("duoduozy.com")!=-1||playurl.indexOf("suoyo.cc")!=-1){
        var uuu="https://www.6080kan.cc/app.php?url="+playurl;
        var resp=JZ(JSON.stringify({url:uuu}));
        JSON.stringify({url:JSON.parse(resp.code).url,head:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.81 Safari/537.36 SE 2.X MetaSr 1.0","referer":"origin:https://dp.duoduozy.com"}});
    }else if(playurl.indexOf("api.iopenyun.com:88")!=-1){
        if(playurl.indexOf("html")!=-1){
            var uu="https://api.m3u8.tv:5678/home/api?type=ys&uid=233711&key=dgilouvFKNRSWX2467&url="+playurl.split("=")[1];
            var resp=JZ(JSON.stringify({url:uu}));
            JSON.stringify({url:JSON.parse(resp.code).url});
        }else{
            "web="+playurl+'@{"Referer":"https://user.iopenyun.com:520/user/video","User-Agent":"Mozilla/5.0 Windows10"}';
        }
    }else if(playurl.indexOf("cat.wkfile.com")!=-1){
        JSON.stringify({url:playurl,head:{"User-Agent":"Lavf/58.12.100","Referer":"wkfile.com"}});
    }else if(playurl.indexOf("=")==-1&&playurl.indexOf(".m3u8")>15||playurl.indexOf(".mp4")>15||playurl.indexOf("/obj/tos")!=-1){
        if(playurl.indexOf("hsl.ysgc.xyz")!=-1){
            var cccc=JZ(JSON.stringify({url:"https://jx.ysgc.xyz/?url="+playurl}));
            JSON.stringify({url:JSON.parse(cccc.code).url,head:{"Referer":"https://ysgc.cc"}});
        }else if(playurl.indexOf("1.ruifenglb.com")!=-1){
            JSON.stringify({url:playurl,head:{"referer":"https://1.ruifenglb.com"}});
        }else{
            JSON.stringify({url:playurl.match(/.*(http.*)/)[1]});
        }
    }else if(playurl.indexOf("=")!=-1){
        var resp=JZ(JSON.stringify({url:playurl,redirect:false,head:{"User-Agent":"Mozilla/5.0 Android"}}));
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
            if(resp.code.indexOf("<html")!=-1){
                if(resp.code.search(/player=new/)!=-1||resp.code.search(/<div id="video"/)!=-1||resp.code.search(/<div id="[^"]*?player"/)!=-1||resp.code.search(/\/\/视频链接/)!=-1||resp.code.search(/<iframe[\s\S]*?src="[^"]+?"/)!=-1||resp.code.search(/<video[\s\S]*?src="[^"]+?"/)!=-1){
                    "web="+playurl;
                }else{
                    if(playurl.split("url=")[1].indexOf("http")!=-1){
                        "web=http://egwang186.gitee.io/?url="+playurl.split("url=")[1];
                    }else if(playurl.split("url=")[1].indexOf("renrenmi")!=-1){
                        var 接口="http://www.1080kan.cc/jiexi/rrmi.php?url=";
                        "web="+接口+playurl.split("url=")[1]+'@{"Referer":"http://www.1080kan.cc/"}';
                    }else{
                    var id=playurl.split("url=")[1];
                    var uuu="https://vip.gaotian.love/api/?key=sRy0QAq8hqXRlrEtrq&url="+id;
                    var resp=JZ(JSON.stringify({url:uuu}));
                    var realurl=JSON.parse(resp.code).url||JSON.parse(resp.code).msg;
                    JSON.stringify({url:realurl});
                    }
                }
            }else{
                if(e2Rex(resp.code,".json(url)").length>1){
                    var realurl=JSON.parse(resp.code).url;
                    if(playurl.indexOf("mgtv.com")!=-1){
                        JSON.stringify({url:realurl,head:{"User-Agent":"Mozilla/5.0","Referer":""}});
                    }else if(playurl.indexOf("bilibili.com")!=-1){
                        JSON.stringify({url:realurl});
                    }else{
                        JSON.stringify({url:realurl});
                    }
                }else if(playurl.split("url=")[1].indexOf("http")!=-1){
                    "web=http://egwang186.gitee.io/?url="+playurl.split("url=")[1];
                }else if(playurl.split("url=")[1].indexOf("renrenmi")!=-1){
                    var 接口="http://www.1080kan.cc/jiexi/rrmi.php?url=";
                    "web="+接口+playurl.split("url=")[1]+'@{"Referer":"http://www.1080kan.cc/"}';
                }else{
                    var id=playurl.split("url=")[1];
                    var uuu="https://vip.gaotian.love/api/?key=sRy0QAq8hqXRlrEtrq&url="+id;
                    var resp2=JZ(JSON.stringify({url:uuu}));
                    var realurl=JSON.parse(resp2.code).url||JSON.parse(resp2.code).msg;
                    JSON.stringify({url:realurl});
                }
            }
        }
    }else{
        JSON.stringify({url:playurl});
    }
}else{
    "web="+uu;
}