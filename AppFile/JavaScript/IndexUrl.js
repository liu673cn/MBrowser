var u=getVar("url");
var filename=e2Rex("aHR0cHM6Ly9pbm1lbW9yeS5jb2RpbmcubmV0L3AvSW5NZW1vcnkvZC9BcHBGaWxtL2dpdC9yYXcvbWFzdGVyL+WIl+ihqC5qc29u",".t().dn64()");
if(u.indexOf("搜狗")!=-1){
    "https://waptv.sogou.com/napi/video/classlist?abtest=0";
}else if(u.indexOf("豆瓣片库")!=-1){
    "https://frodo.douban.com/api/v2/movie/tag?apikey=0dad551ec0f84ed02907ff5c42e8ec70";
}else if(u.indexOf("豆瓣片单")!=-1){
    "https://frodo.douban.com/api/v2/skynet/new_playlists?apikey=0dad551ec0f84ed02907ff5c42e8ec70";
}else if(u.indexOf("豆瓣榜单")!=-1){
    "https://frodo.douban.com/api/v2/subject_collection/";
}else{
    getHttp(JSON.stringify({url:filename}));
}