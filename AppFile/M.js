function dataBase(path){
    this.path=path;
    this.file=new java.io.File(path);
    this.init=function(){
        if(this.file.getParentFile().exists())this.file.getParentFile().mkdirs();
        if(!this.file.exists())this.file.createNewFile()
    }
}
function dataBase(path,limit){
    this.path=path;this.limit=limit;
    this.file=new java.io.File(path);
    this.init=function(){
        if(this.file.getParentFile().exists())this.file.getParentFile().mkdirs();
        if(!this.file.exists())this.file.createNewFile()
    }
}
dataBase.prototype={constructor:dataBase,limit:300,read:function(){
    var len=this.file.length();
    if(len==0)
        return[];
        var content=java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE,len);
        var fin=new java.io.FileInputStream(this.file);
        fin.read(content);fin.close();
        return JSON.parse(new java.lang.String(content))
},
write:function(content){
    var fwt=new java.io.FileWriter(this.path,false);
    fwt.write(content);
    fwt.close()
},
insert:function(obj){
    var list=this.read();
    if(list==null||list=='')
    list=[];
    obj['Uid']=new Date().getTime();
    obj['create_date']=new Date();
    list.push(obj);
    list=list.slice(0,this.limit);
    this.write(JSON.stringify(list))
},
deleteOne:function(path,v){
    var jsonData=this.read();
    var delList=this.getIndex(path,v);
    if(delList.length>0){
        jsonData.splice(delList[0],1);
        this.write(JSON.stringify(jsonData));
        return 1}return 0
    },
    deleteAll:function(path,v){
        let nums=0;
        var jsonData=this.read();
        for(let index=0;index<jsonData.length;index++){
            var keyArr=path.split('.');
            var value=jsonData[index];
            for(var i in keyArr){
                value=value[keyArr[i]]
            }
            if(value!=undefined&&value==v){
                jsonData.splice(index,1);
                index--;nums++
            }
        }
        if(nums>0)
            this.write(JSON.stringify(jsonData));
            return nums
    },
    update:function(path,oldv,newv){
        var obj=this.findOne(path,oldv);
        if(obj==0)
            return 0;
        var jsonData=this.read();
        var key=path.split('.')[path.split('.').length-1];
        obj=this.change(obj,newv,key);
        for(let index=0;index<jsonData.length;index++){
            if(jsonData[index].id==obj.id){
                jsonData[index]=obj;
                this.write(JSON.stringify(jsonData));
                return 1
            }
        }
        return-1
    },
    findOne:function(path,v){
        var jsonData=this.read();
        for(let x of jsonData){
            var keyArr=path.split('.');
            var value=x;
            for(var i in keyArr){
                value=value[keyArr[i]]
            }
            if(value!=undefined&&value==v){
                return x
            }
        }
        return 0
    },
    findAll:function(path,v){
        var values=[];
        var jsonData=this.read();
        for(let x of jsonData){
            var keyArr=path.split('.');
            var value=x;
            for(var i in keyArr){
                value=value[keyArr[i]]
            }
            if(value!=undefined&&value==v){
                values.push(x)
            }
        }
        return values
    },
    change:function(obj,value,o){
        for(var key in obj){
            if(key==o){
                obj[key]=value
            }
            if(typeof obj[key]=='object'){
                change(obj[key])
            }
        }
        return obj
    },
    getIndex:function(path,v){
        var index=0;
        var values=[];
        var jsonData=this.read();
        for(let x of jsonData){
            var keyArr=path.split('.');
            var value=x;
            for(var i in keyArr){
                value=value[keyArr[i]]
            }
            if(value!=undefined&&value==v){
                values.push(index)
            }
            index++
        }
        return values
    },
};
function fileCopy(oldPath,newPath){
    var oldFile=new java.io.File(oldPath);
    var file=new java.io.File(newPath);
    var fin=new java.io.FileInputStream(oldFile);
    var fout=new java.io.FileOutputStream(file);
    var content=java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE,4096);
    var readByte=0;
    while((readByte=fin.read(content))!=-1){
        fout.write(content,0,readByte)
    }
    fin.close();
    fout.close()
}
function thread(obj){
    r=new java.lang.Runnable(obj);
    t=new java.lang.Thread(r);t.start()
}
function download(urlStr,savePath){
    this.urlStr=urlStr;
    this.savePath=savePath
}
function download(urlStr,savePath,referer){
    this.urlStr=urlStr;
    this.savePath=savePath;
    this.referer=referer
}
function download(urlStr,savePath,referer,toekn){
    this.urlStr=urlStr;
    this.savePath=savePath;
    this.referer=referer;
    this.toekn=toekn
}
download.prototype={
    constructor:download,downLoadFromUrl:function(){
        var url=new java.net.URL(this.urlStr);
        var conn=url.openConnection();
        conn.setConnectTimeout(3*1000);
        conn.setRequestProperty('User-Agent','Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)');
        conn.setRequestProperty('referer',this.referer);
        conn.setRequestProperty('token',this.token);
        var inputStream=conn.getInputStream();
        var getData=this.readInputStream(inputStream);
        var file=new java.io.File(this.savePath);
        var fos=new java.io.FileOutputStream(file);
        fos.write(getData);
        if(fos!=null){
            fos.close()
        }
        if(inputStream!=null){
            inputStream.close()
        }
    },
    readInputStream:function(inputStream){
        var buffer=new java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE,4096);
        var len=0;
        var bos=new java.io.ByteArrayOutputStream();
        while((len=inputStream.read(buffer))!=-1){
            bos.write(buffer,0,len)
        }
        bos.close();
        return bos.toByteArray()
    },
};