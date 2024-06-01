const appError = require("./../utils/appError")
module.exports=(err, req, res, next)=>{
    console.log("here we are")
    err.statusCode=err.statusCode || 500;
    err.message = err.message || "Internal server error"

    if(err.code === 11000){
    
        // const message = `Dublicate ${Object.keys(err.keyValue)} Entered`,
        const message = `Dublicate ${Object.keys(err.keyValue)} entered`
        err= new AppError(message, 400);
    }



    res.status(err.statusCode).json({
        success: false,
        err,
        message: err.message
    })
}