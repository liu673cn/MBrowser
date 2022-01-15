var 地址=getVar("url");
var KEY=getVar("KEY");
if(地址.indexOf(".vod")!=-1){
    if(地址.indexOf("iopenyun.com")!=-1){
        "/list?wd="+KEY+"&page=";
    }else{
        "?wd="+KEY+"&page=";
    }
}else if(地址.indexOf("api.php/app")!=-1||地址.indexOf("xgapp.php/v1")!=-1){
    "search?text="+KEY+"&pg=";
}else{
    if(地址.indexOf("esellauto")!=-1||地址.indexOf("1.14.63.101")!=-1||地址.indexOf("zjys")!=-1||地址.indexOf("tv.cttv")!=-1||地址.indexOf("dcd")!=-1||地址.indexOf("lxue")!=-1||地址.indexOf("weetai.cn")!=-1||地址.indexOf("haokanju1")!=-1||地址.indexOf("fit:8")!=-1||地址.indexOf("zjj.life")!=-1||地址.indexOf("love9989")!=-1||地址.indexOf("8d8q")!=-1||地址.indexOf("lk.pxun")!=-1||地址.indexOf("hgyx")!=-1||地址.indexOf("521x5")!=-1||地址.indexOf("lxyyy")!=-1||地址.indexOf("0818tv")!=-1||地址.indexOf("diyoui")!=-1||地址.indexOf("diliktv")!=-1||地址.indexOf("ppzhu")!=-1||地址.indexOf("aitesucai")!=-1||地址.indexOf("zz.ci")!=-1||地址.indexOf("chxjon")!=-1||地址.indexOf("watchmi")!=-1||地址.indexOf("vipbp")!=-1||地址.indexOf("bhtv")!=-1||地址.indexOf("xfykl")!=-1){
        var word="wd";
    }else{
        var word="zm";
    }
    "?ac=list&"+word+"="+KEY+"&page=";
}