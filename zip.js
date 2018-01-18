const zlib=require('zlib');
const path=require('path');
const fs= require('fs');

const gzip = (filePath)=> {
    var readSt=fs.createReadStream(filePath);
    var writeSt=fs.createWriteStream(filePath+".gz");
    readSt.pipe(zlib.createGzip()).pipe(writeSt);
};

const gunzip = (filePath)=> {
    var readSt=fs.createReadStream(filePath);
    var writeSt=fs.createWriteStream(filePath+'gunzip');
    readSt.pipe(zlib.createGunzip()).on('error',function(error){console.log(error);}).pipe(writeSt).on('finish',
    function(){console.log('done');});
};

//gzip(__dirname+'/webServeFile.js');
gunzip(__dirname+'/webServeFile.js.gz');