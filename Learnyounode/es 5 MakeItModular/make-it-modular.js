// const mymodule = require('./mymodule')

// let dir = process.argv[2]
// let ext = process.argv[3]

// console.log(mymodule(dir, ext))

const mymodule = require('./mymodule')

let dir = process.argv[2]
let ext = process.argv[3]


mymodule(dir, ext, function(error, list){
    if(error){
        return console.error(error)
    }

    for (let index = 0; index < list.length; index++) {
        console.log(list[index])
    }
})

//SOLUZIONE UFFICIALE
// 'use strict'
// const filterFn = require('./solution_filter.js')
// const dir = process.argv[2]
// const filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })



    

    
    

    
