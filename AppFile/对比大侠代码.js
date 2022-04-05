eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename='一个影视本地规则.txt';
var 记录=[];
if(getVar("KEY").length>10){
    var rule=e2Rex(getVar("KEY"),".json(rule)")||e2Rex(getVar("KEY"),".dn64().json(rule)");
    if(rule){
        var title=e2Rex(getVar("KEY"),".json(title)")||e2Rex(getVar("KEY"),".dn64().json(title)");
        var img=e2Rex(getVar("KEY"),".json(img)")||e2Rex(getVar("KEY"),".dn64().json(img)");
        var baseURL=e2Rex(getVar("KEY"),".json(baseURL)")||e2Rex(getVar("KEY"),".dn64().json(baseURL)");
        var 分类地址=e2Rex(getVar("KEY"),".json(分类地址)")||e2Rex(getVar("KEY"),".dn64().json(分类地址)");
        var 首页地址=e2Rex(getVar("KEY"),".json(首页地址)")||e2Rex(getVar("KEY"),".dn64().json(首页地址)");
        var type="网页类";
        记录.push({title:title,img:img,baseURL:baseURL,分类地址:分类地址,首页地址:首页地址,type:type,rule:rule});
    }else{
        if(e2Rex(getVar("KEY"),".json(title)")&&e2Rex(getVar("KEY"),".json(url)")&&e2Rex(getVar("KEY"),".json(img)")){
            var title=e2Rex(getVar("KEY"),".json(title)");var baseURL='"'+e2Rex(getVar("KEY"),".json(url)")+'";';var img=e2Rex(getVar("KEY"),".json(img)");
            if(baseURL.search(/api\.php\/app\//)!=-1||baseURL.search(/xgapp\.php\/v/)!=-1){
                var 分类地址='getVar("baseURL")+"video?tid=分类&lang=&year=&pg=翻页";';
                var 首页地址='getVar("baseURL")+"index_video?token=";';
                var type="小龟";
            }else if(baseURL.search(/\.php\/.+?\.vod/)!=-1){
                var 分类地址='getVar("baseURL")+"?type=分类&lang=&year=&page=翻页";';
                var 首页地址='getVar("baseURL")+"/vodPhbAll";';
                var type="v1.vod";
            }else if(baseURL.search(/api\.php\/.+?\/vod\//)!=-1){
                var 分类地址='getVar("baseURL")+"?ac=list&class=分类&page=翻页";';
                var 首页地址='getVar("baseURL")+"?ac=list&class=&start=&area=&type=&page=1";';
                var type="iptv";
            }else{
                alert("暂未适配");
            }
            记录.push({title:title,img:img,baseURL:baseURL,分类地址:分类地址,首页地址:首页地址,type:type});
        }else if(getVar("KEY").indexOf(",http")!=-1){
            var 输入条目=getVar("KEY").match(/.+,http.+/g);
            for(var j in 输入条目){
                var title=e2Rex(输入条目[j],".tz(,)");var baseURL='"'+e2Rex(输入条目[j],".ty(,)")+'";';var img="http://1.117.152.239:39000/tupian.php?text="+title;
                if(baseURL.indexOf("?")!=-1){
                    var 分类地址='getVar("baseURL")+"&ac=videolist分类&page=翻页";';
                    var 首页地址='getVar("baseURL")+"&ac=list&page=1";';
                    var type="CMS";
                }else{
                    var 分类地址='getVar("baseURL")+"?ac=videolist分类&page=翻页";';
                    var 首页地址='getVar("baseURL")+"?ac=list&page=1";';
                    var type="CMS";
                }
                记录.push({title:title,img:img,baseURL:baseURL,分类地址:分类地址,首页地址:首页地址,type:type});
            }
        }else{
            alert("请输入正确规则格式：\n1,APP类：{\"title\":\"播放呀\",\"url\":\"https:\/\/www.bofangya.com\/xgapp.php\/v1\/\",\"img\":\"https:\/\/inmemory.coding.net\/p\/InMemory\/d\/MBrowser\/git\/raw\/master\/AppFile\/AppIcon\/播放呀.png\"}\n2,CMS类：xx资源,http..... \n3,网页类：参考内置网页源模板");
        }
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
                    item.data=当前条目.concat(item.data);
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
     _.read(filename);
}else{
    alert("请输入正确规则格式：\n1,APP类：{\"title\":\"播放呀\",\"url\":\"https:\/\/www.bofangya.com\/xgapp.php\/v1\/\",\"img\":\"https:\/\/inmemory.coding.net\/p\/InMemory\/d\/MBrowser\/git\/raw\/master\/AppFile\/AppIcon\/播放呀.png\"}\n2,CMS类：xx资源,http..... \n3,网页类：参考内置网页源模板");
}if 