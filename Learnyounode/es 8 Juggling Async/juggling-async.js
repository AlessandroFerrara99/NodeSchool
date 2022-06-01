const http = require('http');
const bl = require('bl');
let urlArray = process.argv.splice(2);
let result = []
let count = 0;

function printResult(){
    if (count == 3) {
        console.log(result[0])
        console.log(result[1])
        console.log(result[2])   
    }
};

function callHttp(index){
    http.get(urlArray[index], function(response){
        // eseguito per ogni url
        response.pipe(bl(function(err, data){
                result[index] = data.toString();
                count++;
                printResult()   
            }))
    })
}

for (let index = 0; index < 3; index++) {
    callHttp(index);
}


// SOLUZIONE UFFICIALE
// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }
