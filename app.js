const http = require('http')
const fs = require('fs')
const port = 8000;

 const server = http.createServer((req, res) =>{
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><center><h1>Hallo Petzi</h1></center>');
        res.write('<form action="/message" method="POST"><input type="text" name="Nachricht"><button type="submit">Send</button></form>');
        res.write('</body></html>');
        return res.end();
    }
    if (url ==='/message' && method ==='POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        });
        req.on ('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            const nachricht = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', nachricht);
        });
        res.statusCode=302;
        res.setHeader('Location', '/');
        return res.end();
    }
 });

server.listen(port);


