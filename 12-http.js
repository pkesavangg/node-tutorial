const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req);
    if(req.url === '/') {
        res.end('Welcome to our main page!');
    } 
    
    if(req.url === '/about') {
        res.end('It is about short history');
    } 
    
    res.end(`
    <h1>OOPS!</h1>
        <a href ='/' > Back home </a>    
    `);
})

server.listen(1000);


