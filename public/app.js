var time = 0;


// setTimeout(function(){
//     console.log('5 Seconds of Summer');
// }, 5000);

var timer = setInterval(function(){
  time += 5;
  console.log(time + ' Seconds of Summer');
  if (time > 5){
      clearInterval(timer);
  }
}, 5000);

console.log(__dirname);
console.log(__filename);