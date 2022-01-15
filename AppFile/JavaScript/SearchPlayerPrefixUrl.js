var URLS=getVar("urls");
if(URLS.indexOf("api.php/app")!=-1||URLS.indexOf("xgapp.php/v1")!=-1){
    if(URLS.indexOf("dijiaxia")!=-1){
        var URL=URLS.split("search?")[0];
        var URL="http://www.dijiaxia.com/api.php/app/";
        URL+"video_detail?id=";
    }else{
        var URL=URLS.split("search?")[0];
        URL+"video_detail?id="; 
    }
}else if(URLS.indexOf(".vod")!=-1){
    if(URLS.indexOf("iopenyun")!=-1){
        var URL=URLS.split("/list?")[0];
        URL+"/detailID?vod_id=";
    }else{
        var URL=URLS.split("?wd=")[0];
        URL+"/detail?vod_id=";
    }
}else{
    "";
}