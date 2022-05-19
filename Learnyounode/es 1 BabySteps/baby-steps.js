
let arrayToSum = process.argv
let tot = 0

for (let index = 2; index < arrayToSum.length; index++) {
    let element = arrayToSum[index]
    tot += Number(element)
}


console.log(tot)



// SOLUZIONE UFFICIALE
// 'use strict'

//     let result = 0

//     for (let i = 2; i < process.argv.length; i++) {
//       result += Number(process.argv[i])
//     }

//     console.log(result)