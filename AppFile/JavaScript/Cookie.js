var code=getVar("CODE");
var URL=e2Rex(code,".json(url)");
if(URL.indexOf("api.php/app")!=-1||URL.indexOf("xgapp.php/v1")!=-1){
    "";
}else if(URL.indexOf(".vod")!=-1){
    "";
}else if(URL.indexOf("搜狗")!=-1){
    "ABTEST=3|1615358299|v1; IPLOC=CN4403; SUV=00F0551665E97E5C6048695B5B6E5290; VIDEO_DEBUG=off";
}else{
    "";
}