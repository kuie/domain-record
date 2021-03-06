const net = require('net')
const util = require('util')
const config = require('../config/config.json')
const parse = require('../utils/parse')
const serverIP = config.server
const port = config.port
const server = net.createServer()
//链接成功后向访问者返回加密的ip地址
server.on('connection', socket => {
    console.log(socket.remoteAddress)
    socket.write(parse.enCode(socket.remoteAddress))
    socket.end()
})
server.listen(port, serverIP)
util.log(`IPServer启动<${serverIP}:${port}>`)
