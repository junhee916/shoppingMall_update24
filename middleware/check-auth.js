const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    try{

        const token = req.headers.authorization.split(' ')[1]

        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        req.userData = decoded;

        next();

    }catch (err){

        res.state(501).json({
            msg : "Auth failed"
        })
    }
}