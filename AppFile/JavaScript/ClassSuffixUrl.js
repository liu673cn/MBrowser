var code=getVar("CODE");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp.php/v1")!=-1){
    "&class=类型&area=地区&lang=语种&year=年份&limit=18&pg=#PN#";
}else if(URL.indexOf(".vod")!=-1){
    "&class=类型&area=地区&lang=语种&year=年份&by=排序&limit=18&page=#PN#";
}else if(URL.indexOf("豆瓣片单")!=-1){
    "/items?apikey=0dad551ec0f84ed02907ff5c42e8ec70&start=#PN#&count=20&items_only=0";
}else{
    "";
}