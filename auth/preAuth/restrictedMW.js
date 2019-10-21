const jwt = require('jsonwebtoken')
module.exports = (req, res,next) =>{
    const token = req.headers.authorization;
    if(token){
        //Check token
        jwt.verify(token, 'SOMESECRETFROMENV',(err,decodedToken)=>{
            if(err){
                //Not GOOD
                res.status(400).json({message:'Bad Credentials'})
            } else {
                //Token Is good
                req.username.username
                next()
            }
        })
    }else{
        res.status(400).json({message:'Bad Credentials: No Token'})
    }
}