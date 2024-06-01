const Recipe = require("./../model/recipeModel")
const catchAsync = require("./../utils/catchAsync")
const AppError = require("./../utils/appError")

exports.createRecipie = catchAsync(async(req, res, next)=>{
const newRecipie = await Recipe.create(req.body);
res.status(200).json({
    success: true,
    recipie: newRecipie
})
})

exports.getRecipie = catchAsync(async(req, res, next)=>{
    const recipe = await Recipe.find({crop: req.body.crop});
    if(!recipe){
        return next(new AppError("Recipie not found for this crop", 404));
    }
    res.status(200).json({
        success: true,
        message: "Recipie found",
        recipe,
    })
})