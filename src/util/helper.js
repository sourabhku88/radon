
// print data
const printDate = ()=> {
    console.log(new Date().toDateString());
}
//print month
const printMonth = ()=> {
    console.log(new Date().getMonth() + 1);
}
// print info our batch
const getBatchInfo = ()=> {
    console.log('Roadon, W3D1, the topic for today is Nodejs module system');
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo