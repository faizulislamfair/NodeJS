var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data);
});

// console.log('Banana Monkey');

// fs.writeFileSync('writeMe.txt', readMe);


//code

