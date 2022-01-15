var u=getVar("url");
var filename=e2Rex("aHR0cHM6Ly9pbm1lbW9yeS5jb2RpbmcubmV0L3AvSW5NZW1vcnkvZC9NQnJvd3Nlci9naXQvcmF3L21hc3Rlci9BcHBGaWxlL0phdmVTY3JpcHQvQXBwQ29kZS50eHQ=",".t().dn64()");
if(u.indexOf("搜狗")!=-1){
    "https://waptv.sogou.com/napi/video/classlist?abtest=0";
}else if(u.indexOf("豆瓣片库")!=-1){
    "https://frodo.douban.com/api/v2/movie/tag?apikey=0dad551ec0f84ed02907ff5c42e8ec70";
}else if(u.indexOf("豆瓣片单")!=-1){
    "https://frodo.douban.com/api/v2/skynet/new_playlists?apikey=0dad551ec0f84ed02907ff5c42e8ec70";
}else if(u.indexOf("豆瓣榜单")!=-1){
    "https://frodo.douban.com/api/v2/subject_collection/";
}else{
    var Code=getHttp(JSON.stringify({url:filename}));
    var 分类=e2Rex(Code,".json(data)")
    var res={};var items=[];var detail=[];
    for(var i=0;i<分类.length;i++){
        var 列表=e2Rex(分类[i],".json(list)");
        var 标题=e2Rex(分类[i],".json(title)");
        var LIST=[];
        for(var j=0;j<列表.length;j++){
            var 名=e2Rex(列表[j],".json(title)");
            var 图=e2Rex(列表[j],".json(img)");
            var 地址=e2Rex(列表[j],".json(url)");
                if(地址.indexOf("api.php/app")!=-1||地址.indexOf("xgapp.php/v1")!=-1){
                    var 分类源码=getHttp(JSON.stringify({url:地址+"nav"}));
                    var 推荐源码=getHttp(JSON.stringify({url:地址+"index_video"}));
                }else if(地址.indexOf(".vod")!=-1){
                    var 分类源码=getHttp(JSON.stringify({url:地址+"/types"}));
                    var 推荐源码=getHttp(JSON.stringify({url:地址+"/vodPhbAll"}));
                }else{

                }
            LIST.push({title:名,img:图,code:源码,url:地址,murl:});
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
}