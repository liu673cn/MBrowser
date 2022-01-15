var code=getVar("CODE");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp.php/v1")!=-1){
    URL+"nav?token=";
}else if(URL.indexOf(".vod")!=-1){
    URL+"/types";
}else{
    "";
}