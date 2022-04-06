eval(getVar("qjs"));
var SubName=getVar("订阅名");
if(SubName.indexOf("null")!=-1){
    var filename='远程订阅索引.txt';
    var 新记录=_.read(filename).match(/.+?,.+/g).filter(item=>item!=getVar("url"));
    _.write(新记录.join("\n"),filename);
    alert("订阅删除成功");
    _.read(filename);
}else{
    var filename=SubName+'.json';
    var 记录=getVar("CODE");
    var 新记录=JSON.parse(_.read(filename));
    let res=新记录.some(item=>{
        if(item.title == JSON.parse(记录).type){
            item.data=item.data.filter(a=>a.url!=JSON.parse(记录).url);
            return true
        }
    });
    var AppName=e2Rex(记录,".json(title)");
    _.write(JSON.stringify(新记录),filename);
    alert(AppName+"\n删除成功");
    _.read(filename);
}