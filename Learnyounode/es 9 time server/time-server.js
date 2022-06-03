let net = require('net');
let date = new Date()


let server = net.createServer(function (socket){
    let year = date.getFullYear().toString();

    let month = date.getMonth() + 1;
    let stringMonth = month.toString();
    let trueMonth = monthCorrector(stringMonth);

    let day = date.getDate().toString();
    let trueDay = dayCorrector(day);

    let hours = date.getHours().toString();

    let minutes = date.getMinutes().toString();

    let dateFormat = year + '-' + trueMonth + '-' + trueDay + ' ' + hours + ':' + minutes;

    socket.write(dateFormat)
    socket.write("\n")
    socket.end();
});

function dayCorrector(day){
    if (day.length == 1) {
        return '0' + day
    } else {
        return day
    }
}

function monthCorrector(month){
    if (month.length == 1) {
        return '0' + month
    } else {
        return month
    }
}

server.listen(process.argv[2]);


// SOLUZIONE UFFICIALE
// 'use strict'
//     const net = require('net')

//     function zeroFill (i) {
//       return (i < 10 ? '0' : '') + i
//     }

//     function now () {
//       const d = new Date()
//       return d.getFullYear() + '-' +
//         zeroFill(d.getMonth() + 1) + '-' +
//         zeroFill(d.getDate()) + ' ' +
//         zeroFill(d.getHours()) + ':' +
//         zeroFill(d.getMinutes())
//     }

//     const server = net.createServer(function (socket) {
//       socket.end(now() + '\n')
//     })

//     server.listen(Number(process.argv[2]))
