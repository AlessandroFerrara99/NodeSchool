const fs = require('fs')
const http = require('http')

let url = process.argv[2]

http.get(url, function callback(response){
   
    response = response.setEncoding('utf8')

    response.on('data', function (data){
        return console.log(data)
    })
    response.on('error', function (error){
        return console.log(error)
    })
    response.on('end', function (end){
        return console.log(end)
    })
})

// SOLUZIONE UFFICIALE
// 'use strict'
//     const http = require('http')

//     http.get(process.argv[2], function (response) {
//       response.setEncoding('utf8')
//       response.on('data', console.log)
//       response.on('error', console.error)
//     }).on('error', console.error)
