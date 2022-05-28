const jwt = require('jsonwebtoken');
const User = require('../model/User')

exports.isAuthorized = async (req,res,next) => {
    try{
        let token;

        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            token = req.headers.authorization.split(' ')[1];
        }

        if(!token){
            return res.status(401).json({
                success : false,
                error : "Invalid Token"
            })
        }

        const verified = jwt.verify(token, "SWERA");
        const user = User.findOne({email : verified.email})
        req.user = user;
        next();
    }
    catch(error){
        return res.status(401).json({
            success : false,
            error : "Not authorized for this route"
        })
    }
}