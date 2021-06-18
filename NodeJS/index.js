//console.log("Node App")

// const a = 5
// const b = 10
//console.log(a,b)

// console.log("a is equal to: %s and b is equal to: %s",a,b)

// Importing modules

/**      Module       */

// const os = require('os')

// console.log(os.type())

// const car = {
//     brand: "BMW",
//     model: "Z4"
// }

// module.exports = car;

// const lodash = require('lodash');



/**             Event Loop               */


// const bar = () => console.log('bar')

// const baz = () => console.log('baz')

// const foo = () =>{
//     console.log('foo')
//     setTimeout(bar, 1000)
//     baz()
// }

// foo()



/**             Callback            */


// function getMessage(msg, callback){
//     setTimeout(() => {
//        console.log(msg)
//        callback() 
//     }, 1000)
// }

// function DisplayMessage(){
//     console.log('Display Message')
// }

// getMessage("Get Message", () => console.log("Display Msg"))




                              /**                Promises               */


// let promise = new Promise(function(resolve,reject){
//     setTimeout(()=>reject(new Error("Whoops")), 1000)
// });

// let promise = new Promise(function(resolve,reject){
//     setTimeout(()=>resolve("Run Before"), 1000)
// });

// promise.then(
//     result => {
//         console.log(result)
//         GetAfer()
//     },
//     error => console.log(error)
// )

// function GetAfer(){
//     console.log("Print After");
// }



/**            Async and Await          */


// function metal(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('lmao')
//         },2000)
//     })
// }

// async function msg(){
//     const msg = await metal()
//     console.log("Message: ",msg)
// }

// msg()



/**            HTTP Server             */

// const http = require("http")

// const hostname = "127.0.0.1"
// const port = 3000;

// const server = http.createServer((req, res) => {
//         res.writeHead( 200, {'Content-Type':'text/plain'})
//         res.write("Welcome to HTTP Server");
//         res.end();
// }).listen(port, hostname, ()=>{
//     console.log(` Server running at http://${hostname}:${port}/`)
// })

// server.listen(port, hostname, ()=>{
//     console.log(` Server running at http://${hostname}:${port}/`)
// })



/**              HTTP Request                */

const http = require("http")

http.get('http://api.open-notify.org/astros.json', resp => {
    let data = '';
     resp.on('data', chunk => {
         data += chunk
     });

     resp.on('end', ()=>{
         let jsondata = JSON.parse(data)
         console.log(jsondata)
     })
})



