function getSessionID(req, res, next){
    if(req.session.userID === ""){
        req.session.userID = false
    }
    next();
}

module.exports.getSessionID;