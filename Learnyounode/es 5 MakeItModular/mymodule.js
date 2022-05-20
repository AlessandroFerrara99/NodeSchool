// module.exports = function(dir, ext){
//     const fs = require('fs')
//     const path = require('path')

//     fs.readdir(dir, function fileCounter(error, list){
//         if(error){
//             return console.log(error)
//         }

//         let fileExt = '.' + ext
//         let fileArray = []

//         for (let index = 0; index < list.length; index++) {
//             if (path.extname(list[index]) == fileExt) {
//                 fileArray.push(list[index])
//                 return fileArray
//             }
//         }
//     })
// }

const fs = require('fs')
const path = require('path')

module.exports = function(dir, ext, callback){
    
    
    let fileExt = '.' + ext
    let listArray = []

    fs.readdir(dir, function(error, list){
        
        if (error) {
            return callback(error)
        }

        list.forEach(function (file){
            if (path.extname(file) === fileExt) {
                listArray.push(file)
                return listArray
            }
        })

        
        callback(null, listArray)
    })
}


//SOLUZIONE UFFICIALE
// 'use strict'
//     const fs = require('fs')
//     const path = require('path')

//     module.exports = function (dir, filterStr, callback) {
//       fs.readdir(dir, function (err, list) {
//         if (err) {
//           return callback(err)
//         }

//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })

//         callback(null, list)
//       })
//     }
