var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array'; 
};

var adder = function(a,b,c,d,e){
    return `The sum of the 5 numbers is ${a+b+c+d+e}`;
};

var pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};