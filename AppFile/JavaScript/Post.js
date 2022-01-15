var code=getVar("CODE");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp.php/v1")!=-1){
    "";
}else if(URL.indexOf(".vod")!=-1){
    "";
}else if(URL.indexOf("豆瓣")!=-1){
    "host=frodo.douban.com&accept=*/*";
}else{
    "";
}