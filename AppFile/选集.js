var URL=getVar("url");
function 选集列表(){
    var res={};var items=[];var detail=[];
    for(var i=0;i<分类.length;i++){
        var 分类CODE=分类[i];
        var 列表=e2Arr(分类CODE,列表规则);
        var 标题=e2Rex(分类CODE,标题规则);
        if(URL.indexOf(".vod")!=-1){
            //萝卜/白菜/木白/绿豆类型接口
            var PARSE=e2Rex(分类CODE,".json(player_info).json(parse)").split(",");
            var PARSE2=e2Rex(分类CODE,".json(player_info).json(parse2)").split(",");
            var 总接口=PARSE2.concat(PARSE).filter(item => item.search(/\/.+\?.+=/)!=-1);
            var 过滤规则=[
                /jx\.+huimaojia\.+com\/player/,/py\.+789pan\.+cn\/player\/tm\.php\?url=/,/ztys\.+waruanzy\.+com\/player\/\?url=/,/yingshi\.+waruanzy\.+com\/789pan\/\?url=/,/vip\.+parwix\.+com:4433\/player\/\?url=/,/api\.+cxitco\.+cn/,/\/vip\.+renrenmi.cc/,/yanbing\.+parwix\.+com:4433\/player/,/json\.+cantin\.+cc\/apijson\.php/,/ffdm\.+miaoletv\.+com\/\?url=/,/vip\.+sylwl\.+cn\/api\/\?key=/,/jx\.+dikotv\.+com\/\?url=/,/zly\.+xjqxz\.+top\/player\/\?url=/,/5znn\.+xyz\/m3u8\.+php/,/uid=1735&my=/,/api\.+xkvideo\.+design\/m3u8\.+php\?url=/,/play\.+szbodankyy\.+com\/xxoocnmb/,/vip\.+fj6080\.+xyz\/player\/\?url=/,/a\.+dxzj88\.+com\/jiexi/,/host\.+q-q\.+wang\/api/,/qpsvipr\.+naifeimi\.+com/,/mogai_api\.+php/,/lvdou_api\.+php/,/保佑/
            ];
            var 可用接口=总接口.filter(function (text) {return !过滤规则.some(function (regex) {return regex.test(text);});});
            if(JSON.stringify(可用接口).indexOf("=")!=-1){
                if(可用接口[0].indexOf("http")!=-1){
                    var 接口=可用接口[0].match(/.*(url|v|vid|pid|php\?id)=/)[0].replace("..",".").replace("vip.aotian.love","vip.gaotian.love");
                }else if(可用接口[0].indexOf("//")!=-1){
                    var 接口="http:"+可用接口[0].match(/\/\/.*(url|v|vid|pid|php\?id)=/)[0].replace("..",".");
                }else{
                    var 接口=URL.match(/https?:\/\/[^\/]*/)[0]+可用接口[0].match(/\/.*(url|pid|v|vid|php\?id)=/)[0].replace("..",".");
                }
            }else{
                //对于无自带接口的，给予一个统一接口
                var 接口="http://1.117.152.239:39000/?url=";
            }
        }else if(URL.indexOf("api.php/app/")!=-1||URL.indexOf("xgapp")!=-1){
            //小龟类型接口
            var 接口=e2Rex(分类CODE,".json(parse_api)");
            //替换接口
            if(接口.indexOf("jpg.hou.lu/jm/za/index.php")!=-1){
                var 接口="http://vip.mengx.vip/home/api?type=ys&uid=3249696&key=aefqrtuwxyEFHKNOQY&url=";
            }else if(接口==""){
                var 接口="http://1.117.152.239:39000/?url=";
            }else{
                var 接口=接口;
            }
        }else{
            //其它类型
            var 接口=URL;
        }
        //统一更换接口
        if(接口.indexOf("svip.jhyun.jx.cn")!=-1||接口.indexOf("svip.jhdyw.vip")!=-1){
            if(标题.indexOf("人人迷")!=-1){
                接口="http://www.1080kan.cc/jiexi/rrmi.php?url=";
            }else if(标题.indexOf("人人")!=-1){
                接口="http://www.1080kan.cc/jiexi/rr.php?url=";
            }else if(标题.indexOf("番茄")!=-1){
                接口="http://www.1080kan.cc/jiexi/fq.php?url=";
            }else{
                接口="https://jx.parwix.com:4433/player/?url=";
            }
        }else if(接口.indexOf("jhsj.manduhu.com")!=-1||接口.indexOf("v.jhdyw.vip/nhdz666")!=-1){
            接口="https://jx.parwix.com:4433/player/?url=";
        }else if(接口.indexOf("x-n.cc")!=-1){
            接口="https://jx.parwix.com:4433/player/?url=";
        }
        var LIST=[];
        for(var j=0;j<列表.length;j++){
            var 选集=e2Rex(列表[j],选集规则);
            var 选集地址=e2Rex(列表[j],选集地址规则);
            if(URL.indexOf("xgapp")!=-1||URL.indexOf("api.php/app/")!=-1||URL.indexOf(".vod")!=-1){
                //萝卜/白菜/木白/绿豆/小龟类型选集地址
                if(选集地址.indexOf(".m3u8")>15||选集地址.indexOf(".mp4")>15){
                    if(选集地址.indexOf("url=")!=-1){
                        var 切割地址=选集地址.split("url=")[1];
                        var 选集地址="https://www.baidu.com/s?wd="+切割地址;
                    }else{
                        var 选集地址="https://www.baidu.com/s?wd="+选集地址;
                    }
                }else{
                    var 选集地址="https://www.baidu.com/s?wd="+接口+选集地址;
                }
            }else if(URL.search(/api\.php\/.*?\/vod/)!=-1){
                //神马类型选择地址
                if(选集地址.indexOf(".m3u8")>15||选集地址.indexOf(".mp4")>15){
                    if(选集地址.indexOf("url=")!=-1){
                        var 切割地址=选集地址.split("url=")[1];
                        var 选集地址="https://www.baidu.com/s?wd="+切割地址;
                    }else{
                        var 选集地址="https://www.baidu.com/s?wd="+选集地址;
                    }
                }else if(选集地址.indexOf("www.bilibili.com")!=-1){
                    var 切割地址=选集地址.split("url=")[1];
                    var 选集地址="https://www.baidu.com/s?wd=https://jx.parwix.com:4433/player/?url="+切割地址;
                }else if(URL.indexOf("yhzy")!=-1||URL.indexOf("zhenfy")!=-1||URL.indexOf("cztv")!=-1||URL.indexOf("1.14.63.101")!=-1||URL.indexOf("fit:8")!=-1||URL.indexOf("diliktv.xyz")!=-1||URL.indexOf("ppzhu.vip")!=-1||URL.indexOf("api.8d8q.com")!=-1||URL.indexOf("haokanju1.cc")!=-1||URL.indexOf("cztv")!=-1){
                    var 选集地址="https://www.baidu.com/s?wd="+选集地址+"&app=10000&account=272775028&password=qq272775028";
                }else if(URL.indexOf("lxyyy")!=-1||URL.indexOf("j.zjj.life")!=-1||URL.indexOf("lktv")!=-1||URL.indexOf("0818tv")!=-1||URL.indexOf("ruoxinew")!=-1){
                    var 切割地址=选集地址.split("url=")[1];
                    var 选集地址="https://www.baidu.com/s?wd=https://jx.parwix.com:4433/player/?url="+切割地址;
                }else{
                    var 选集地址="https://www.baidu.com/s?wd="+选集地址;
                }
            }else{
                var 选集地址="https://www.baidu.com/s?wd="+选集地址;
            }
            LIST.push({title:选集,url:选集地址});
        }
        var play_={};
        play_.title=标题;
        play_.list=LIST;
        items.push(play_);
    }
    detail.push({desc:简介});
    res.data=items;
    res.desc=detail;
    return JSON.stringify(res);
}
if(URL.indexOf("api.php/app/")!=-1){
    var 分类=e2Arr(getVar("源码"),".json(data).json(vod_url_with_player)");
    var 简介=e2Rex(getVar("源码"),".json(data).json(vod_content)");
    var 列表规则=".json(url).ct(#).z(.*?\\$.*?#)";
    var 标题规则=".json(name)";
    var 选集规则=".z2(\\\(.+?\\\)\\$)";
    var 选集地址规则=".z2(\\$\\\(.+?\\\)[#|\"])";选集列表();
}else if(URL.indexOf("xgapp")!=-1){
    var 分类=e2Arr(getVar("源码"),".json(data).json(vod_info).json(vod_url_with_player)");
    var 简介=e2Rex(getVar("源码"),".json(data).json(vod_info).json(vod_content)");
    var 列表规则=".json(url).ct(#).z(.*?\\$.*?#)";
    var 标题规则=".json(name)";
    var 选集规则=".z2(\\\(.+?\\\)\\$)";
    var 选集地址规则=".z2(\\$\\\(.+?\\\)[#|\"])";选集列表();
}else if(URL.indexOf(".vod")!=-1){
    var 分类=e2Arr(getVar("源码").replace(/\s+/g,""),".json(data).json(vod_play_list)");
    var 简介=e2Rex(getVar("源码"),".json(data).json(vod_content)");
    var 列表规则=".json(url).ct(#).z(.*?\\$.*?#)";
    var 标题规则=".json(player_info).json(show)";
    var 选集规则=".z2(\\\(.+?\\\)\\$)";
    var 选集地址规则=".z2(\\$\\\(.+?\\\)[#|\"])";选集列表();
}else if(URL.search(/api\.php\/.*?\/vod/)!=-1){
    var 分类=e2Arr(getVar("源码"),".json(videolist).z(\".*?\\])");
    var 简介=e2Arr(getVar("源码"),".json(intro)");
    var 列表规则=".z(\\{.*?\\})";
    var 标题规则=".z2(\"\\(.*?\\)\")";
    var 选集规则=".json(title)";
    var 选集地址规则=".json(url)";选集列表();
}