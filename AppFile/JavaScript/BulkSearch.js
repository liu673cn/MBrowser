var appSign="8c1a742e9f9c4ee5b9ec18fa642b32c5";
var sign=e2Rex(getVar("QMINFO"),".xml(sign).t()").replace(/\s/g,"");
var NewVersion="20211120";
var version=e2Rex(getVar("QMINFO"),".xml(version).z(\\d+)");
var filename=e2Rex("aHR0cHM6Ly9pbm1lbW9yeS5jb2RpbmcubmV0L3AvSW5NZW1vcnkvZC9BcHBGaWxtL2dpdC9yYXcvbWFzdGVyL+WIl+ihqC5qc29u",".t().dn64()");
var KEY=getVar("KEY");
var appName="APP影视.js";
var name=e2Rex(getVar("QMINFO"),".xml(name).t()").replace(/\s/g,"");
if(version==NewVersion&&sign==appSign&&name==appName){
    var 原=getHttp(JSON.stringify({url:filename})).replace(/\s/g,"");
    var 分类=e2Arr(原,".json(data)");
    var res=[];
    for(var j=0;j<分类.length;j++){
        var list={};
        var 列表=e2Arr(分类[j],".json(list)");
        var items=[];
        for(var i=0;i<列表.length;i++){
            var 标题=e2Rex(列表[i],".json(title)");
            var 地址=e2Rex(列表[i],".json(url)");
            if(地址.indexOf(".vod")!=-1){
                if(地址.indexOf("iopenyun.com")!=-1){
                    var 地址=地址+"/list?wd="+KEY+"&page=";
                }else{
                    var 地址=地址+"?wd="+KEY+"&page=";
                }
            }else if(地址.indexOf("api.php/app")!=-1||地址.indexOf("xgapp.php/v1")!=-1){
                var 地址=地址+"search?text="+KEY+"&pg=";
            }else if(地址.search(/api\.php\/.*?\/vod/)!=-1){
                if(地址.indexOf("esellauto")!=-1||地址.indexOf("1.14.63.101")!=-1||地址.indexOf("zjys")!=-1||地址.indexOf("tv.cttv")!=-1||地址.indexOf("dcd")!=-1||地址.indexOf("lxue")!=-1||地址.indexOf("weetai.cn")!=-1||地址.indexOf("haokanju1")!=-1||地址.indexOf("fit:8")!=-1||地址.indexOf("zjj.life")!=-1||地址.indexOf("love9989")!=-1||地址.indexOf("8d8q")!=-1||地址.indexOf("lk.pxun")!=-1||地址.indexOf("hgyx")!=-1||地址.indexOf("521x5")!=-1||地址.indexOf("lxyyy")!=-1||地址.indexOf("0818tv")!=-1||地址.indexOf("diyoui")!=-1||地址.indexOf("diliktv")!=-1||地址.indexOf("ppzhu")!=-1||地址.indexOf("aitesucai")!=-1||地址.indexOf("zz.ci")!=-1||地址.indexOf("chxjon")!=-1||地址.indexOf("watchmi")!=-1||地址.indexOf("vipbp")!=-1||地址.indexOf("bhtv")!=-1||地址.indexOf("xfykl")!=-1){
                    var word="wd";
                }else{
                    var word="zm";
                }
                var 地址=地址+"?ac=list&"+word+"="+KEY+"&page=";
            }
            items.push(标题+"="+地址);
        }
        var 合并=items.join("\n");
        var 分类标题=e2Rex(分类[j],".json(title)");
        list.url=合并;list.title=分类标题;
        res.push(list);
    }
    JSON.stringify(res);
}else{
    "";
}