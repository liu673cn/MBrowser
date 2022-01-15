var code=getVar("CODE");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp.php/v1")!=-1){
    if(URL.indexOf("dijiaxia")!=-1){
        var URL="http://www.dijiaxia.com/api.php/app/";
        URL+"video?tid=";
    }else{
        URL+"video?tid=";
    }
}else if(URL.indexOf(".vod")!=-1){
    if(URL.indexOf("iopenyun")!=-1){
        URL+"/list?type=";
    }else{
        URL+"?type=";
    }
}else if(URL.indexOf("豆瓣片单")!=-1){
    "https://frodo.douban.com/api/v2/subject_collection/";
}else{
    URL;
}