const http = require('http')

 const server = http.createServer((req, res) =>{
    //console.log(req.url, req.method, req.headers);

     const url = req.url;
     if(url ==='/'){
         return
     }

    res.setHeader('Content-Type', 'text/html')
     res.write('<html>')
     res.write('<head></head>')
     res.write('<body><h1>Hello</h1></body>')
     res.write('</html>')
     res.end();

 });

server.listen(3000);


