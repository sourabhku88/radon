const isPresentisFreeAppUser= function ( req, res, next) {
    if(!(req.headers.isfreeappuser)) res.send({msg:"missing a mandatory header"});
    else  next()
}

module.exports = {isPresentisFreeAppUser}

