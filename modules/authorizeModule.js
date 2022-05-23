const jwt = require('jsonwebtoken')

exports.isAuthorized = async (req,res,next) => {
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