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

const School = require('./school');

const school = new School();



// register a listener for bellRing event
school.on('bellRing', ({ period, text }) => {
    console.log(`We need to run because ${period} ${text}`);
});

school.startPeriod();

