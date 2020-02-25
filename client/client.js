const net = require('net')
const parse = require('../utils/parse')
const config = require('../config/config.json')
const url = config.server, urlPort = config.port
const client = net.connect(urlPort, url)
client.on('data', data => {
    const ip = parse.deCode(data.toString())
    client.write(parse.enCode(JSON.stringify({code: 200})))
    //如果是子进程则向父进程发送IP地址
    process.send && process.send({ip})
    console.info(`IP:${ip}`)
})
client.on('error', error => console.log(error))
client.on('end', () => process.exit(0))
