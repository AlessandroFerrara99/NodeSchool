const fs = require('fs')
const http = require('http')
const bl = require('bl')

let url = process.argv[2]

let printData = function (err, data){
    let stringData = data.toString()
    let characterCounter = stringData.length
    console.log(characterCounter)
    console.log(stringData)
}

http.get(url, function callback(response){
    response = response.setEncoding('utf8')
    
    
    
    response.on('data', function (data){
        
    })
    
    response.on('error', function (error){
     
    })
    
    response.on('end', function (end){
         
    })

    response.pipe(bl(printData))
})

// SOLUZIONE UFFICIALE
// 'use strict'
//     const http = require('http')
//     const bl = require('bl')

//     http.get(process.argv[2], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err) {
//           return console.error(err)
//         }
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//       }))
//     })
