const crypto = require('crypto')
const util = require('util')
const config = require('../config/config')
const key = Buffer.from(config.key, 'utf8')
const iv = Buffer.from(config.iv, 'utf8')
const algorithm = 'aes-128-cbc'
const obj = {
    deCode: (code, callback = null) => {
        let result
        try {
            const decipher = crypto.createDecipheriv(algorithm, key, iv)
            result = decipher.update(code, 'hex', 'utf8')
            result += decipher.final('utf8')
        } catch (err) {
            util.log('解密错误')
            result = false
        } finally {
            result && callback && callback(result)
        }
        return result
    },
    enCode: (code, callback = null) => {
        const cipher = crypto.createCipheriv(algorithm, key, iv)
        let result = cipher.update(code, 'utf8', 'hex')
        result += cipher.final('hex')
        callback && callback(result)
        return result
    }
}
module.exports = obj
