var {readdirSync} = require('fs')
module.exports = dir => readdirSync(dir).length==0
