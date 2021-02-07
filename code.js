// console.log(window);

// setTimeout(() => {
//      console.log('kola_khabo');
// }, 1000);

// console.log(global);

// var a=5;
// console.log(global.a);

// console.log(__dirname);
// console.log(__filename);

// const banana = require('./banana');

// console.log(banana.banana);
// console.log(banana.a);
// console.log(banana.test);


// const path = require('path');
// const myPath = 'C:/Users/S.M. FAIR/Desktop/NodeJS/index.js';

// console.log(path.basename(myPath));

// const os = require('os');

// console.log(os.platform());

// const fs = require('fs');

// fs.writeFileSync('myfile.txt', 'Hello Developers!');
// fs.appendFileSync('myfile.txt', ' Brain Station');

// const data = fs.readFileSync('myfile.txt');
// console.log(data.toString()); 

// const School = require('./school');

// const school = new School();



// register a listener for bellRing event
// school.on('bellRing', ({ period, text }) => {
//     console.log(`We need to run because ${period} ${text}`);
// });

// school.startPeriod();

// const fs = request('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');

// ourReadStream.on('data', (data) => {
//     console.log(data);
// });

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name="message" /></form></body>'
            );
        res.end();
    } else if(req.url === '/process' && req.method === 'POST'){
        req.on('data', (chunk) => {
            console.log(chunk.toString());
        }); 
        res.write('Thank you for submitting');
        res.end();
    } else {
        res.write('System Error');
        res.end();
    }
});

server.listen(3000);

console.log('listening on port 3000');