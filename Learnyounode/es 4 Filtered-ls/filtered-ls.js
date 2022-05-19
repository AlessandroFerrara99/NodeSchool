const fs = require('fs')
let dir = process.argv[2]
let fileExt = "." + process.argv[3]
let path = require('path') 

fs.readdir(dir, function fileCounter(err, list){

    if (err == true) {
        return console.log(err)
    }

    for (let index = 0; index < list.length; index++) {
        if (path.extname(list[index]) == fileExt) {
           return console.log(list[index])
        }
    }
})

// SOLUZIONE UFFICIALE
// 'use strict'
//     const fs = require('fs')
//     const path = require('path')

//     const folder = process.argv[2]
//     const ext = '.' + process.argv[3]

//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })
