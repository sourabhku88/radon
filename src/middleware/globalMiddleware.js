const moment = require('moment');
const globalMiddleware = async (req,res,next)=>{
    const IP = req.ip
    const url = req.url
    const newData = moment().format()
    console.log(` ${newData}  ${IP}  ${url} `);
    next()
}

module.exports = {globalMiddleware}