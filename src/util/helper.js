const printDate = ()=> {
    console.log(new Date().toDateString());
}
const printMonth = ()=> {
    console.log(new Date().getMonth() + 1);
}
const getBatchInfo = ()=> {
    console.log('Roadon, W3D1, the topic for today is Nodejs module system');
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo