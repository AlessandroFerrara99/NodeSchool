const fs = require('fs')
let file = process.argv[2]
let index = 0


const BUFFER = fs.readFileSync(file)

let bufferStringArray = BUFFER.toString().split('\n')

for (index = 0; index < bufferStringArray.length; index++) {}
let result = index - 1

console.log(result)

// SOLUZIONE UFFICIALE
// 'use strict'
//     const fs = require('fs')

//     const contents = fs.readFileSync(process.argv[2])
//     const lines = contents.toString().split('\n').length - 1
//     console.log(lines)

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1


