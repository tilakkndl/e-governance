const Crop = require("./../model/cropModel")
const catchAsync = require("../utils/catchAsync")

exports.createCrop = catchAsync(async(req, res, next)=>{
    const {crop, image, description} = req.body;
    const crops = await Crop.find({});
    console.log([...crops])
    const newCrop = await Crop.create({
        crop,
        image,
        description
    })

    res.status(201).json({
        success: true,
        message: "crop created",
        crop: newCrop
    })

})

exports.getAllCrops = catchAsync(async(req, res, next)=>{
    const crops = await Crop.find({})
    res.status(200).json({
        crops: [...crops]
    })
})