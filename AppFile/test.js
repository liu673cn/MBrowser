######首页轮播图1
{
    "data":[
        {
        "url":"https://7cc7cc.com/thread-902.htm",
        "title":"本地规则写入教程",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/反馈.png"
        },
        {
        "url":"https://7cc7cc.com/thread-902.htm",
        "title":"反馈",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/反馈.png"
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
        "url":"q:导入",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/导入.png"
        },
        {
        "url":"q:豆瓣榜单",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/榜单.png"
        },
        {
        "url":"https://7cc7cc.com/thread-902.htm",
        "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/Icon/反馈.png"
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
var NewVersion="20220214";
var version=e2Rex(getVar("QMINFO"),".xml(version).z(\\d+)");
var appSign="d566171c6a64659aad784524c76ab569";
var sign=e2Rex(getVar("QMINFO"),".xml(sign).t()").replace(/\s/g,"");
var appName="APP影视";
var name=e2Rex(getVar("QMINFO"),".xml(name).t()").replace(/\s/g,"");
if(version==NewVersion&&sign==appSign&&name==appName){
    e2Rex(index,".json(data).i(0)");
}else{
    alert("————更新内容————\n    ·增加导入自定义源\n\n—————声明—————\n    ·本轻站仅限学习交流使用，请于导入后24小时内删除，任何组织或个人不得以任何方式方法传播此规则的整体或部分。\n    ·数据来源于网络，如喜欢，请支持官方APP；APP接口本身无收费，切勿用于任何有关于交易的行为。\n    ·请勿相信任何广告，涉及人身财产安全问题请理智对待。\n    ·如接口侵权请联系删除。\n    ·因技术有限，更新修复视情况而定，使用中如有问题请通过M浏览器官方群或轻创社区反馈。\n    ·特别感谢广大侠的代码支持以及木白的首页图标。")
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
var appSign="d566171c6a64659aad784524c76ab569";
var sign=e2Rex(getVar("QMINFO"),".xml(sign).t()").replace(/\s/g,"");
var NewVersion="20220214";
var version=e2Rex(getVar("QMINFO"),".xml(version).z(\\d+)");
var KEY=getVar("KEY");
var appName="APP影视";
var name=e2Rex(getVar("QMINFO"),".xml(name).t()").replace(/\s/g,"");
if(version==NewVersion&&sign==appSign&&name==appName){
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
                if(地址.indexOf("iopenyun.com")!=-1){
                    var 地址=地址+"/list?wd="+KEY+"&page=";
                }else{
                    var 地址=地址+"?wd="+KEY+"&page=";
                }
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
}else{
    "";
}
######单一搜索9
var appSign="d566171c6a64659aad784524c76ab569";
var sign=e2Rex(getVar("QMINFO"),".xml(sign).t()").replace(/\s/g,"");
var NewVersion="20220214";
var version=e2Rex(getVar("QMINFO"),".xml(version).z(\\d+)");
var appName="APP影视";
var name=e2Rex(getVar("QMINFO"),".xml(name).t()").replace(/\s/g,"");
if(version==NewVersion&&sign==appSign&&name==appName){
    getHttp(JSON.stringify({url:"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/APP.json"}));
}else{
    "";
}
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
    URL+"advert?token=&position=2";
}else if(URL.indexOf(".vod")!=-1){
    URL+"?level=9";
}else{
    "";
}
######获取分类地址14
var code=getVar("CODE");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp")!=-1){
    URL+"nav?token=";
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
    URL+"index_video?token=";
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
            var PARSE=e2Rex(分类CODE,".json(player_info).json(parse)").split(",");
            var PARSE2=e2Rex(分类CODE,".json(player_info).json(parse2)").split(",");
            var 总接口=PARSE2.concat(PARSE).filter(item => item.search(/\/.+\?.+=/)!=-1);
            var 过滤规则=[
/jx\.+huimaojia\.+com\/player/,/py\.+789pan\.+cn\/player\/tm\.php\?url=/,/ztys\.+waruanzy\.+com\/player\/\?url=/,/yingshi\.+waruanzy\.+com\/789pan\/\?url=/,/vip\.+parwix\.+com:4433\/player\/\?url=/,/api\.+cxitco\.+cn/,/\/vip\.+renrenmi.cc/,/yanbing\.+parwix\.+com:4433\/player/,/json\.+cantin\.+cc\/apijson\.php/,/ffdm\.+miaoletv\.+com\/\?url=/,/vip\.+sylwl\.+cn\/api\/\?key=/,/jx\.+dikotv\.+com\/\?url=/,/zly\.+xjqxz\.+top\/player\/\?url=/,/5znn\.+xyz\/m3u8\.+php/,/uid=1735&my=/,/api\.+xkvideo\.+design\/m3u8\.+php\?url=/,/play\.+szbodankyy\.+com\/xxoocnmb/,/vip\.+fj6080\.+xyz\/player\/\?url=/,/a\.+dxzj88\.+com\/jiexi/,/host\.+q-q\.+wang\/api/,/qpsvipr\.+naifeimi\.+com/,/保佑/
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
                var 接口="http://1.117.152.239:39000/?url=";
            }
        }else if(URL.indexOf("api.php/app/")!=-1||URL.indexOf("xgapp")!=-1){
            var 接口=e2Rex(分类CODE,".json(parse_api)");
            if(接口.indexOf("jpg.hou.lu/jm/za/index.php")!=-1){
                var 接口="http://vip.mengx.vip/home/api?type=ys&uid=3249696&key=aefqrtuwxyEFHKNOQY&url=";
            }else{
                var 接口=接口;
            }
        }else{
            var 接口=URL;
        }
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
                if(选集地址.indexOf(".m3u8")>15||选集地址.indexOf(".mp4")>15||选集地址.indexOf("/obj/tos")!=-1){
                    if(选集地址.indexOf("url=")!=-1){
                        var 切割地址=选集地址.split("url=")[1];
                        var 选集地址="https://www.baidu.com/s?wd="+切割地址;
                    }else{
                        var 选集地址="https://www.baidu.com/s?wd="+选集地址;
                    }
                }else if(接口.indexOf("url=")==-1&&选集地址.indexOf("RongXingVR")!=-1){
                    var 选集地址="https://www.baidu.com/s?wd=https://fast.rongxingvr.cn:8866/api/?key=nShWumGdMIbTwngTbI&url="+选集地址;
                }else if(接口.indexOf("url=")==-1&&选集地址.indexOf("LT")!=-1){
                    var 选集地址="https://www.baidu.com/s?wd=https://f7.pyxddc.com/bcjx/4k.php?url="+选集地址;
                }else if(接口.indexOf("url=")==-1&&选集地址.indexOf("renrenmi")!=-1){
                    var 选集地址="https://www.baidu.com/s?wd=https://kuba.renrenmi.cc:2266/api/?key=Y6UYLYtjImTCKe98JD&url="+选集地址;
                }else if(接口.indexOf("url=")==-1&&选集地址.indexOf(".html")!=-1){
                    var 选集地址="https://www.baidu.com/s?wd=http://1.117.152.239:39000/?url="+选集地址;
                }else if(选集地址.indexOf("xfy")!=-1){
                    var 选集地址="https://www.baidu.com/s?wd=http://jiexi.yunl.cc/api/?key=xYNESYSvHp1DV2ckKs&url="+选集地址;
                }else{
                    var 选集地址="https://www.baidu.com/s?wd="+接口+选集地址;
                }
            }else if(URL.search(/api\.php\/.*?\/vod/)!=-1){
                if(选集地址.indexOf(".m3u8")>15||选集地址.indexOf(".mp4")>15||选集地址.indexOf("/obj/tos")!=-1){
                    if(选集地址.indexOf("ruifenglb")!=-1){
                      var 选集地址="http://ts.yjhan.com:8090/api/?key=DSQFgXdmj9xkDyiXdr&url="+选集地址;
                    }else if(选集地址.indexOf("url=")!=-1){
                        var 切割地址=选集地址.split("url=")[1];
                        var 选集地址="https://www.baidu.com/s?wd="+切割地址;
                    }else{
                        var 选集地址="https://www.baidu.com/s?wd="+选集地址;
                    }
                }else if(选集地址.indexOf("xfy")!=-1){
                    if(选集地址.indexOf("url=")!=-1){
                        var 切割地址=选集地址.split("url=")[1];
                        var 选集地址="https://www.baidu.com/s?wd=http://cache.dmtt.xyz/xfyjx/xfyjx.php?url="+切割地址;
                    }else{
                        var 选集地址="https://www.baidu.com/s?wd=https://json.hfyrw.com/mao.go?url="+选集地址;
                    }
                }else if(选集地址.indexOf("www.bilibili.com")!=-1){
                    var 切割地址=选集地址.split("url=")[1];
                    var 选集地址="https://www.baidu.com/s?wd=https://jx.parwix.com:4433/player/?url="+切割地址;
                }else if(URL.indexOf("yhzy")!=-1||URL.indexOf("zhenfy")!=-1||URL.indexOf("cztv")!=-1||URL.indexOf("1.14.63.101")!=-1||URL.indexOf("fit:8")!=-1||URL.indexOf("diliktv.xyz")!=-1||URL.indexOf("ppzhu.vip")!=-1||URL.indexOf("api.8d8q.com")!=-1||URL.indexOf("haokanju1.cc")!=-1||URL.indexOf("cztv")!=-1){
                    var 选集地址="https://www.baidu.com/s?wd="+选集地址+"&app=10000&account=272775028&password=qq272775028";
                }else if(URL.indexOf("lxyyy")!=-1||URL.indexOf("j.zjj.life")!=-1||URL.indexOf("lktv")!=-1||URL.indexOf("0818tv")!=-1||URL.indexOf("ruoxinew")!=-1){
                    var 切割地址=选集地址.split("url=")[1];
                    var 选集地址="https://www.baidu.com/s?wd=https://play.tkys.tv/?url="+切割地址;
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
    var 分类=e2Arr(getVar("源码"),".json(data).json(vod_play_list)");
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
    }else if(playurl.indexOf("xfy")!=-1){
        var resp=JZ(JSON.stringify({url:playurl}));
        JSON.stringify({url:JSON.parse(resp.code).url,head:{"referer":"appguapi.lihaoyun.top:11543","User-Agent":"Dart/2.14 (dart:io)"}});
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
                        "web=http://1.117.152.239:39000/?url="+playurl.split("url=")[1];
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
                    "web=http://1.117.152.239:39000/?url="+playurl.split("url=")[1];
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
######导入规则22
eval(e2Rex(getHttp('https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/q.js'),'.dn64()'));
var filename='APP影视.txt';
var 记录=[];
if(getVar("KEY").length>10){
	if(e2Rex(getVar("KEY"),".json(title)")&&e2Rex(getVar("KEY"),".json(url)")&&e2Rex(getVar("KEY"),".json(img)")){
        var title=e2Rex(getVar("KEY"),".json(title)");
        var url=e2Rex(getVar("KEY"),".json(url)");
        var img=e2Rex(getVar("KEY"),".json(img)");
        var murl=e2Rex(getVar("KEY"),".json(murl)");
        记录.push({title:title,url:url,img:img,murl:mrul});
    }else{
		alert("请输入正确规则格式");
	}
    if(_.read(filename)){
		var 新记录=[];
		var 记录=记录.concat(JSON.parse(_.read(filename))[0].data);
		新记录.push({title:"本地规则",data:记录});
	}else{
		var 新记录=[];
		新记录.push({title:"本地规则",data:记录});
	}
	_.write(JSON.stringify(新记录),filename);
	_.read(filename);
}else{
	alert("请输入正确规则格式");
}
######读取规则23
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/q.js'),'.dn64()'));
var filename='APP影视.txt';
_.read(filename);
######删除规则24
eval(e2Rex(getHttp('https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/q.js'),'.dn64()'));
var filename="APP影视.txt";
var 新记录=JSON.parse(_.read(filename))[0].data.filter(item=>item.title!=JSON.parse(getVar("CODE")).title);
var 新数据=[];新数据.push({title:"本地规则",data:新记录});
_.write(JSON.stringify(新数据),filename);
_.read(filename);