var update="————更新内容————\n    ·增加单一APP搜索\n\n—————声明—————\n    ·本轻站仅限学习交流使用，请于导入后24小时内删除，任何组织或个人不得以任何方式方法传播此规则的整体或部分。\n    ·数据来源于网络，如喜欢，请支持官方APP；APP接口本身无收费，切勿用于任何有关于交易的行为。\n    ·请勿相信任何广告，涉及人身财产安全问题请理智对待。\n    ·如接口侵权请联系删除。\n    ·因技术有限，更新修复视情况而定，使用中如有问题请通过M浏览器官方群或轻创社区反馈。\n    ·特别感谢广大侠的代码支持以及木白的首页图标。";
var IndexPicCode=getHttp(JSON.stringify({url:"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/JavaScript/IndexPicCode.txt"}));
var IndexPic=e2Rex(IndexPicCode,".t().dn64()");
var NewVersion="20211120";
var version=e2Rex(getVar("QMINFO"),".xml(version).z(\\d+)");
var appSign="8c1a742e9f9c4ee5b9ec18fa642b32c5";
var sign=e2Rex(getVar("QMINFO"),".xml(sign).t()").replace(/\s/g,"");
var filename=e2Rex("aHR0cHM6Ly9pbm1lbW9yeS5jb2RpbmcubmV0L3AvSW5NZW1vcnkvZC9BcHBGaWxtL2dpdC9yYXcvbWFzdGVyL+WIl+ihqC5qc29u",".t().dn64()");
var appName="APP影视.js";
var name=e2Rex(getVar("QMINFO"),".xml(name).t()").replace(/\s/g,"");
if(version==NewVersion&&sign==appSign&&name==appName){
    e2Rex(IndexPic,".json(data).i(0)");
}else{
    alert(update)
    e2Rex(index,".json(data).i(1)");
}