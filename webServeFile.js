var http=require('http');
var fs=require('fs');

const server=http.createServer(function(req,res)
{
    //Using Synchronous reading
    // const readFile=fs.readFileSync('./largeImage.jpg');
    // res.end(readFile);
    //Using async reading but not steaming
    // fs.readFile('./largeImage.jpg',function(error,data)
    // {
    //     if(error)
    //     res.end("error");
    //     else
    //     res.end(data);
    // });
    //Using Async and streaming
    const srcFile=fs.createReadStream('./largeImage.jpg');
    srcFile.pipe(res);

});
server.listen(8000);