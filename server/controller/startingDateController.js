const StartingDate = require("./../model/startingDateModel")
const catchAsync = require("./../utils/catchAsync")

exports.addStartingDate = catchAsync(async(req, res, next)=>{
    const newStartingDate = await StartingDate.create({startingDate: req.body.startingDate, user: req.user._id})
    res.status(200).json({
        success: true,
        newStartingDate,
        message: "Mail is tsent"
    })
    
})

