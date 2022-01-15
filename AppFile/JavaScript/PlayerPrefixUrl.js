var code=getVar("CODE");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp.php/v1")!=-1){
    if(URL.indexOf("dijiaxia")!=-1){
        var URL="http://www.dijiaxia.com/api.php/app/";
        URL+"video_detail?id=";
    }else{
        URL+"video_detail?id=";
    }
}else if(URL.indexOf(".vod")!=-1){
    if(URL.indexOf("iopenyun")!=-1){
        URL+"/detailID?vod_id=";
    }else{
        URL+"/detail?vod_id=";
    }
}else{
    "";
}