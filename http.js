const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello developers!');
        res.write(' How is it going?');
        res.end();
    } else if(req.url === '/about'){
        res.write('This is About Page');
        res.end();
    } else {
        res.write('System Error');
        res.end();
    }
});

server.listen(3000);

console.log('listening on port 3000');