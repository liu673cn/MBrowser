######首页轮播图1
{
    "data":[
        {
        "url":"mqqwpa://im/chat?chat_type=wpa&uin=272775028",
        "title":"欢迎分享规则，点击向轻站开发者提供",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/轮播3.jpg"
        },
        {
        "url":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/教程.txt",
        "title":"本地规则教程，按分类写入新文件，点击查看详情",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/轮播1.jpg"
        },
        {
        "url":"https://7cc7cc.com/thread-902.htm",
        "title":"轻创社区反馈",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/轮播4.jpg"
        },
        {
        "url":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/声明.txt",
        "title":"声明/更新日志",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/轮播2.jpg"
        }
    ]
    }
######APP影视首页图标2
{
"data":[
    {
    "list":[
        {
        "url":"q:云端",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/云端.png"
        },
        {
        "url":"q:豆瓣片库",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/豆瓣.png"
        },
        {
        "url":"q:本地",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/本地.png"
        },
        {
        "url":"q:豆瓣片单",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/片单.png"
        },
        {
        "url":"q:管理",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/管理.png"
        },
        {
        "url":"q:豆瓣榜单",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/榜单.png"
        },
        {
        "url":"q:依赖",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/发布.png"
        },
        {
        "url":"q:搜狗片库",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/搜狗.png"
        }
    ]
    },
    {
    "list":[
        {
        "url":"mapi:qm/https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/FileGit/qmFile/InMemory/APP影视.mqz",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/更新.png"
        },
        {
        "url":"https://7cc7cc.com/thread-902.htm",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/反馈.png"
        }
    ]
    },
    {
    "list":[
        {
        "title":"请安装新版APP影视",
        "url":"mapi:qm/https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/FileGit/qmFile/InMemory/APP影视.mqz",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/AppIcon/update.png"
        }
    ]
    }
]
}
######首页版本判断3
var index=getVar("首页图标");
var NewVersion="20220331";
var version=e2Rex(getVar("QMINFO"),".xml(version).z(\\d+)");
var appSign="d566171c6a64659aad784524c76ab569";
var sign=e2Rex(getVar("QMINFO"),".xml(sign).t()").replace(/\s/g,"");
var appName="APP影视";
var name=e2Rex(getVar("QMINFO"),".xml(name).t()").replace(/\s/g,"");
if(version==NewVersion&&sign==appSign&&name==appName){
    e2Rex(index,".json(data).i(0)");
}else{
    alert("————更新内容————\n    ·自定义源支持订阅\n\n    请详细阅读本地写入教程，有订阅说明")
    e2Rex(index,".json(data).i(1)");
}
######首页地址判断4
var u=getVar("url");
if(u.indexOf("搜狗")!=-1){
    "https://waptv.sogou.com/napi/video/classlist?abtest=0";
}else if(u.indexOf("豆瓣片库")!=-1){
    "https://frodo.douban.com/api/v2/movie/tag?apikey=0dad551ec0f84ed02907ff5c42e8ec70";
}else if(u.indexOf("豆瓣片单")!=-1){
    "https://frodo.douban.com/api/v2/skynet/new_playlists?apikey=0dad551ec0f84ed02907ff5c42e8ec70";
}else if(u.indexOf("豆瓣榜单")!=-1){
    "https://frodo.douban.com/api/v2/subject_collection/";
}else{
    getHttp(JSON.stringify({url:"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/APP.json"}));
}
######UA5
var code=getVar("CODE");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1||URL.indexOf("freekan")!=-1){
    "Dart/2.14 (dart:io)";
}else if(URL.indexOf("zsb")!=-1||URL.indexOf("fkxs")!=-1||URL.indexOf("xays")!=-1||URL.indexOf("xcys")!=-1||URL.indexOf("szys")!=-1||URL.indexOf("dxys")!=-1||URL.indexOf("ytys")!=-1||URL.indexOf("qnys")!=-1){
    "Dart/2.15 (dart:io)";
}else if(URL.indexOf(".vod")!=-1){
    "okhttp/4.1.0";
}else if(URL.indexOf("豆瓣")!=-1){
    "Rexxar-Core/0.1.3 api-client/1 com.douban.frodo/6.36.0(186) Android/23 product/cancro vendor/HUAWEI model/Mate 10 rom/android network/wifi platform/mobile com.douban.frodo/6.36.0(186) Rexxar/1.2.151 platform/mobile 1.2.151";
}else{
    "Dalvik/2.1.0";
}
######POST6
var code=getVar("CODE");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
    "";
}else if(URL.indexOf(".vod")!=-1){
      "";
}else if(URL.indexOf("豆瓣")!=-1){
    "host=frodo.douban.com&accept=*/*";
}else{
    "";
}
######cookie7
var code=getVar("CODE");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
    "";
}else if(URL.indexOf(".vod")!=-1){
    "";
}else if(URL.indexOf("搜狗")!=-1){
    "ABTEST=3|1615358299|v1; IPLOC=CN4403; SUV=00F0551665E97E5C6048695B5B6E5290; VIDEO_DEBUG=off";
}else{
    "";
}
######批量搜索8
var KEY=getVar("KEY");
var 原=getHttp(JSON.stringify({url:"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/APP.json"})).replace(/\s/g,"");
var 分类=e2Arr(原,".json(data)");
var res=[];
for(var j=0;j<分类.length;j++){
    var list={};
    var 列表=e2Arr(分类[j],".json(list)");
    var items=[];
    for(var i=0;i<列表.length;i++){
        var 标题=e2Rex(列表[i],".json(title)");
        var 地址=e2Rex(列表[i],".json(url)");
        if(地址.indexOf(".vod")!=-1){
            var 地址=地址+"?wd="+KEY+"&page=";
        }else if(地址.indexOf("api.php/app")!=-1||地址.indexOf("xgapp")!=-1){
            var 地址=地址+"search?text="+KEY+"&pg=";
        }else if(地址.search(/api\.php\/.*?\/vod/)!=-1){
            if(地址.indexOf("esellauto")!=-1||地址.indexOf("1.14.63.101")!=-1||地址.indexOf("zjys")!=-1||地址.indexOf("tv.cttv")!=-1||地址.indexOf("dcd")!=-1||地址.indexOf("lxue")!=-1||地址.indexOf("weetai.cn")!=-1||地址.indexOf("haokanju1")!=-1||地址.indexOf("fit:8")!=-1||地址.indexOf("zjj.life")!=-1||地址.indexOf("love9989")!=-1||地址.indexOf("8d8q")!=-1||地址.indexOf("lk.pxun")!=-1||地址.indexOf("hgyx")!=-1||地址.indexOf("521x5")!=-1||地址.indexOf("lxyyy")!=-1||地址.indexOf("0818tv")!=-1||地址.indexOf("diyoui")!=-1||地址.indexOf("diliktv")!=-1||地址.indexOf("ppzhu")!=-1||地址.indexOf("aitesucai")!=-1||地址.indexOf("zz.ci")!=-1||地址.indexOf("chxjon")!=-1||地址.indexOf("watchmi")!=-1||地址.indexOf("vipbp")!=-1||地址.indexOf("bhtv")!=-1||地址.indexOf("xfykl")!=-1){
                var word="wd";
            }else{
                var word="zm";
            }
            var 地址=地址+"?ac=list&"+word+"="+KEY+"&page=";
        }
        items.push(标题+"="+地址);
    }
    var 合并=items.join("\n");
    var 分类标题=e2Rex(分类[j],".json(title)");
    list.url=合并;list.title=分类标题;
    res.push(list);
}
JSON.stringify(res);
######单一搜索9
getHttp(JSON.stringify({url:"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/APP.json"}));
######单一搜索搜索地址10
var 地址=getVar("url");
var KEY=getVar("KEY");
if(地址.indexOf(".vod")!=-1){
    "?wd="+KEY+"&page=";
}else if(地址.indexOf("api.php/app")!=-1||地址.indexOf("xgapp")!=-1){
    "search?text="+KEY+"&pg=";
}else{
    if(地址.indexOf("jpsb")!=-1||地址.indexOf("hyddys")!=-1||地址.indexOf("ddmym")!=-1||地址.indexOf("esellauto")!=-1||地址.indexOf("1.14.63.101")!=-1||地址.indexOf("zjys")!=-1||地址.indexOf("tv.cttv")!=-1||地址.indexOf("dcd")!=-1||地址.indexOf("lxue")!=-1||地址.indexOf("weetai.cn")!=-1||地址.indexOf("haokanju1")!=-1||地址.indexOf("fit:8")!=-1||地址.indexOf("zjj.life")!=-1||地址.indexOf("love9989")!=-1||地址.indexOf("8d8q")!=-1||地址.indexOf("lk.pxun")!=-1||地址.indexOf("hgyx")!=-1||地址.indexOf("521x5")!=-1||地址.indexOf("lxyyy")!=-1||地址.indexOf("0818tv")!=-1||地址.indexOf("diyoui")!=-1||地址.indexOf("diliktv")!=-1||地址.indexOf("ppzhu")!=-1||地址.indexOf("aitesucai")!=-1||地址.indexOf("zz.ci")!=-1||地址.indexOf("chxjon")!=-1||地址.indexOf("watchmi")!=-1||地址.indexOf("vipbp")!=-1||地址.indexOf("bhtv")!=-1||地址.indexOf("xfykl")!=-1){
        var word="wd";
    }else{
        var word="zm";
    }
    "?ac=list&"+word+"="+KEY+"&page=";
}
######批量搜索播放器前缀地址11
var Ktime=e2Rex(getVar("TIME_"),".time(MMdd)");
var URLS=getVar("urls");
if(URLS.indexOf("api.php/app")!=-1||URLS.indexOf("xgapp")!=-1){
    var URL=URLS.split("search?")[0];
    URL+"video_detail?id="; 
}else if(URLS.indexOf(".vod")!=-1){
    var URL=URLS.split("?wd=")[0];
    URL+"/detail?key="+Ktime+"&vod_id=";
}else{
    "";
}
######单一搜索播放器前缀地址12
var Ktime=e2Rex(getVar("TIME_"),".time(MMdd)");
var URLS=getVar("url");
if(URLS.indexOf("api.php/app")!=-1||URLS.indexOf("xgapp")!=-1){
    var URL=URLS.split("search?")[0];
    URL+"video_detail?id="; 
}else if(URLS.indexOf(".vod")!=-1){
    var URL=URLS.split("?wd=")[0];
    URL+"/detail?key="+Ktime+"&vod_id=";
}else{
    "";
}
######APP轮播图地址13
var code=getVar("CODE");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
    URL+"advert?position=2";
}else if(URL.indexOf(".vod")!=-1){
    URL+"?level=9";
}else{
    "";
}
######获取分类地址14
var code=getVar("CODE");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
    URL+"nav";
}else if(URL.indexOf(".vod")!=-1){
    URL+"/types";
}else{
    "";
}
######分类筛选前缀地址15
var code=getVar("CODE");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
    URL+"video?tid=";
}else if(URL.indexOf(".vod")!=-1){
    URL+"?type=";
}else if(URL.indexOf("豆瓣片单")!=-1){
    "https://frodo.douban.com/api/v2/subject_collection/";
}else{
    URL;
}
######分类筛选后缀地址16
var code=getVar("CODE");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
    "&class=筛选class&area=筛选area&lang=筛选lang&year=筛选year&limit=18&pg=#PN#";
}else if(URL.indexOf(".vod")!=-1){
    "&class=筛选class&area=筛选area&lang=筛选lang&year=筛选year&by=排序&limit=18&page=#PN#";
}else if(URL.indexOf("豆瓣片单")!=-1){
    "/items?apikey=0dad551ec0f84ed02907ff5c42e8ec70&start=#PN#&count=20&items_only=0";
}else{
    "";
}
######筛选内容17
var URL=getVar("url");
var 分类筛选=JSON.parse(getVar("CODE")).type_extend;
var str="";
for(var key in 分类筛选){
    if(key=="class"||key=="area"||key=="lang"||key=="year"){
        str=str+"筛选"+key+"+全部=+"+分类筛选[key].replace(/,/g,"+")+"\r\n";
    }
}
if(URL.indexOf(".vod")!=-1){
  str+"\r\n"+"排序+全部=+最新=time+最热=hits+评分=score";
}else if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
  str;
}else if(URL.indexOf("搜狗片库")!=-1){
    "分类+全部=+电影=film+连续剧=teleplay+综艺=tvshow+动漫=cartoon+纪录片=documentary\n类型+全部=+古装+剧情+喜剧+爱情+动作+恐怖+科幻+警匪+惊悚+犯罪+奇幻+战争+悬疑+动画+文艺+传记+歌舞+其它\n地区+全部=+内地+香港+台湾+韩国+泰国+日本+美国+英国+新加坡+其他\n年份+全部=+2021+2020+2019+2018+2017+2016+2015+2014+2013+2012+2011+2010+2009+2008+2007+2006+2005+2004+更早\n排序+最新=time+热门=hits+评分=score";
}else if(URL.indexOf("豆瓣片库")!=-1){
    "分类+全部=+电影+电视剧+综艺+动漫+纪录片+短片+冷门\n类型+全部=+剧情+喜剧+动作+爱情+科幻+动画+悬疑+惊悚+恐怖+犯罪+同性+音乐+歌舞+传记+历史+战争+西部+奇幻+冒险+灾难+武侠+情色+三级\n地区+全部=+中国大陆+欧美+美国+中国香港+中国台湾+日本+韩国+英国+法国+德国+意大利+西班牙+印度+泰国+俄罗斯+伊朗+加拿大+澳大利亚+爱尔兰+瑞典+巴西+丹麦\n年份+全部=+2021+2020+2019+2018+2017+2016+2015+2014+2013+2012+2011+2010年代+2000年代+90年代+80年代+70年代+60年代+更早\n特色+全部=+经典+青春+文艺+搞笑+励志+魔幻+感人+女性+黑帮+黑客+治愈+美食+宗教+小说改编+超级英雄\n排序+默认=U+热度=T+评分=S+最新=R";
}else if(URL.indexOf("豆瓣片单")!=-1){
    "分类+全部=all+片单=official+获奖=prize+高分=high_score+榜单=movie_list+冷门佳片=dark_horse+主题=topic+导演=director+演员=actor+系列=series+华语=chinese+欧美=western+日本=japanese\n类型+全部=+电影=movie+连续剧=tv";
}else if(URL.indexOf("豆瓣榜单")!=-1){
    "分类+电影=movie_real_time_hotest+电视剧=tv_real_time_hotest+口碑=movie_weekly_best+top250=movie_top250";
}else{
    "分类+全部=+电影=movie+连续剧=tvplay+综艺=tvshow+动漫=comic+4K=movie_4k+体育=tiyu\n类型+全部=+喜剧+爱情+恐怖+动作+科幻+剧情+战争+警匪+犯罪+动画+奇幻+武侠+冒险+枪战+恐怖+悬疑+惊悚+经典+青春+文艺+微电影+古装+历史+运动+农村+惊悚+惊悚+伦理+情色+福利+三级+儿童+网络电影\n地区+全部=+大陆+香港+台湾+美国+英国+法国+日本+韩国+德国+泰国+印度+西班牙+加拿大+其他\n年份+全部=+2021+2020+2019+2018+2017+2016+2015+2014+2013+2012+2011+2010+2009+2008+2007+2006+2005+2004+2003+2002+2001+2000";
}
######推荐地址18
var code=getVar("CODE");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
    URL+"index_video";
}else if(URL.indexOf(".vod")!=-1){
    URL+"/vodPhbAll";
}else{
    "";
}
######播放器前缀地址19
var Ktime=e2Rex(getVar("TIME_"),".time(MMdd)");
var code=getVar("CODE");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
    URL+"video_detail?id=";
}else if(URL.indexOf(".vod")!=-1){
    URL+"/detail?key="+Ktime+"&vod_id=";
}else{
    "";
}
######选集20
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
                    var 接口=可用接口[0].match(/.*(url|v|vid|php\?id)=/)[0].replace("..",".").replace("vip.aotian.love","vip.gaotian.love");
                }else if(可用接口[0].indexOf("//")!=-1){
                    var 接口="http:"+可用接口[0].match(/\/\/.*(url|v|vid|php\?id)=/)[0].replace("..",".");
                }else{
                    var 接口=URL.match(/https?:\/\/[^\/]*/)[0]+可用接口[0].match(/\/.*(url|v|vid|php\?id)=/)[0].replace("..",".");
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
######视频地址21
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
######写入规则22
eval(e2Rex(getHttp('https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/js/q.js'),'.dn64()'));
var key=getVar("KEY");
var Url=getVar("url");
var SubFlieName='远程订阅索引.txt';
var SubFlieCode=_.read(SubFlieName);
var JsUrl='https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/APP影视.js';
var 记录=[];
if(key.length>10){
    if(key.indexOf(",http")>1&&key.indexOf("#")){
        var SubName=key.split(",")[0];
        var filename=SubFlieName;
        记录=key.match(/.+?,http.+/g);
        if (_.read(filename)){
            var 旧记录=_.read(filename).match(/.+?,http.+/g);
            var 新记录 = 记录.concat(旧记录.filter(item=>item!=记录[0]));
        } else {
            var 新记录=记录;
        }
        _.write(新记录.join("\n"),filename);
        alert(SubName+"\n订阅成功");
        _.read(filename);
    }else if(key.indexOf("@")!=-1&&key.indexOf("=")!=-1&&key.indexOf("#")!=-1){
        if(key.indexOf("api.php/app")!=-1||key.indexOf("xgapp")!=-1||key.indexOf(".vod")!=-1||key.search(/api\.php\/.+?\/vod\//)!=-1){
            var filename='自定义.json';
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
            _.write(rule.join("\n"),txtfile);
            alert("规则写入/更新成功");
            _.read(txtfile);
        }
    }else{
        alert("请输入以下格式\n\n1.[订阅名,订阅地址#图片地址]格式的网络订阅\n2.[分类名@APP名称=APP接口地址#图片地址]格式的规则\n详情请查看首页轮播内的教程");
    }
}else if(SubFlieCode.indexOf(",http")||Url.indexOf(",http")!=-1){
    if(Url.indexOf(",http")!=-1){
        var SubUrl=e2Rex(Url,".ty(,).tz(#)");
        var SubTitle=e2Rex(Url,".tz(,)");
        var SubImg=e2Rex(Url,".ty($)");
    }else{
        var SubUrl=e2Rex(SubFlieCode,".ty(,).tz(#)");
        var SubTitle=e2Rex(SubFlieCode,".tz(,)");
        var SubImg=e2Rex(SubFlieCode,".ty($)");
    }
    var filename=SubTitle+'.json';
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
        alert("规则写入/更新成功");
        _.read(SubTitle+'.txt');
    }
}else if(JsUrl){
    var JsCode=getHttp(JSON.stringify({url:JsUrl}));
    _.write(JsCode,'APP影视.js');
    alert("变量脚本下载/更新成功");
}else{
    alert("内容为空");
}
######读取订阅列表23
eval(e2Rex(getHttp('https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/js/q.js'),'.dn64()'));
var filename='远程订阅索引.txt';
if(_.read(filename)){
  var code=_.read(filename).match(/.+?,.+/g);
}else{
  var data=".,https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/rule/app.txt#https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/FileGit/icon/InMemory.jpg";
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
######删除规则24
eval(e2Rex(getHttp('https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/js/q.js'),'.dn64()'));
var filename='APP影视.json';
var 记录=getVar("CODE");
var 新记录=JSON.parse(_.read(filename));
let res=新记录.some(item=>{
    if(item.title == JSON.parse(记录).type){
        item.data=item.data.filter(a=>a.url!=JSON.parse(记录).url);
        return true
    }
});
var AppName=e2Rex(记录,".json(title)");
_.write(JSON.stringify(新记录),filename);
alert(AppName+"\n删除成功");
_.read(filename);
######本地规则批量搜索25
eval(e2Rex(getVar("qjs"),'.dn64()'));
var filename='APP影视.json';
var 原=_.read(filename);
var KEY=getVar("KEY");
var 分类=e2Arr(原,".json()");
var res=[];
for(var j=0;j<分类.length;j++){
    var list={};
    var 列表=e2Arr(分类[j],".json(data)");
    var items=[];
    for(var i=0;i<列表.length;i++){
        var 标题=e2Rex(列表[i],".json(title)");
        var 地址=e2Rex(列表[i],".json(url)");
        if(地址.indexOf(".vod")!=-1){
            var 地址=地址+"?wd="+KEY+"&page=";
        }else if(地址.indexOf("api.php/app")!=-1||地址.indexOf("xgapp")!=-1){
            var 地址=地址+"search?text="+KEY+"&pg=";
        }else if(地址.search(/api\.php\/.*?\/vod/)!=-1){
            if(地址.indexOf("esellauto")!=-1||地址.indexOf("1.14.63.101")!=-1||地址.indexOf("zjys")!=-1||地址.indexOf("tv.cttv")!=-1||地址.indexOf("dcd")!=-1||地址.indexOf("lxue")!=-1||地址.indexOf("weetai.cn")!=-1||地址.indexOf("haokanju1")!=-1||地址.indexOf("fit:8")!=-1||地址.indexOf("zjj.life")!=-1||地址.indexOf("love9989")!=-1||地址.indexOf("8d8q")!=-1||地址.indexOf("lk.pxun")!=-1||地址.indexOf("hgyx")!=-1||地址.indexOf("521x5")!=-1||地址.indexOf("lxyyy")!=-1||地址.indexOf("0818tv")!=-1||地址.indexOf("diyoui")!=-1||地址.indexOf("diliktv")!=-1||地址.indexOf("ppzhu")!=-1||地址.indexOf("aitesucai")!=-1||地址.indexOf("zz.ci")!=-1||地址.indexOf("chxjon")!=-1||地址.indexOf("watchmi")!=-1||地址.indexOf("vipbp")!=-1||地址.indexOf("bhtv")!=-1||地址.indexOf("xfykl")!=-1){
                var word="wd";
            }else{
                var word="zm";
            }
            var 地址=地址+"?ac=list&"+word+"="+KEY+"&page=";
        }
        items.push(标题+"="+地址);
    }
    var 合并=items.join("\n");
    var 分类标题=e2Rex(分类[j],".json(title)");
    list.url=合并;list.title=分类标题;
    res.push(list);
}
JSON.stringify(res);
######读取远程订阅2
eval(e2Rex(getVar("qjs"), '.dn64()'));
var filename = '远程订阅索引.txt';
if (_.read(filename)) {
  var code = _.read(filename).match(/.+?,.+/g);
} else {
  var data = "InMemory,https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/rule/app.txt#InMemory";
  _.write(data, filename);
  var code = _.read(filename).match(/.+?,.+/g);
}
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:资源采集首页?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######单一搜索读取远程订阅3
eval(e2Rex(getVar("qjs"), '.dn64()'));
var filename = '远程订阅索引.txt';
var code = _.read(filename).match(/.+?,.+/g);
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:单一搜索?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######侧边栏搜索读取远程订阅4
eval(e2Rex(getVar("qjs"), '.dn64()'));
var filename = '远程订阅索引.txt';
var code = _.read(filename).match(/.+?,.+/g);
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:侧边栏引导?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######管理订阅5
eval(e2Rex(getVar("qjs"),'.dn64()'));
var filename='远程订阅索引.txt';
var code=_.read(filename).match(/.+?,.+/g);
var items=[];
for(var i in code){
    var title=code[i].split(",")[0];
    var url="q:管理订阅按钮?url="+code[i];
    items.push({title:title,url:url});
}
JSON.stringify(items);