eval(e2Rex(getVar("qjs"),'.dn64()'));
var filename='APP影视.json';
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

eval(e2Rex(getVar("qjs"),'.dn64()'));
var filename='资源采集远程索引.txt';
var 新记录=_.read(filename).match(/.+?,.+/g).filter(item=>item!=getVar("url"));
_.write(新记录.join("\n"),filename);
_.read(filename);