const jwt = require('jsonwebtoken')

exports.AuthorizeUser = async (req,res,next) => {
    // Check whether token exists
    if(!req.headers['token']) return res.status(401).send({msg : "Unauthorised : Token didn't exist"});
    
    // Verify Token
    try {
        const decodedToken = await jwt.verify(req.headers['token'], "SWERA");
        console.log(decodedToken);
        req.body.user = decodedToken;
        next();
    } catch(err) {
        res.send(err);
    }
}

exports.isAdmin = async (req,res,next) => {
    if(req.body.user.existUser.role == "Admin")
        next()
    else
        res.status(403).send({msg: "You are not Admin"})
}