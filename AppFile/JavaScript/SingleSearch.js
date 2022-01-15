var appSign="8c1a742e9f9c4ee5b9ec18fa642b32c5";
var sign=e2Rex(getVar("QMINFO"),".xml(sign).t()").replace(/\s/g,"");
var NewVersion="20211120";
var version=e2Rex(getVar("QMINFO"),".xml(version).z(\\d+)");
var filename=e2Rex("aHR0cHM6Ly9pbm1lbW9yeS5jb2RpbmcubmV0L3AvSW5NZW1vcnkvZC9BcHBGaWxtL2dpdC9yYXcvbWFzdGVyL+WIl+ihqC5qc29u",".t().dn64()");
var appName="APP影视.js";
var name=e2Rex(getVar("QMINFO"),".xml(name).t()").replace(/\s/g,"");
if(version==NewVersion&&sign==appSign&&name==appName){
    getHttp(JSON.stringify({url:filename}));
}else{
    "";
}