const catchAsync = require('./../utils/catchAsync');
const subsidyModel = require("../model/subsidyModel")

exports.createSubsidy = catchAsync(async (req, res, next) => {
    const subsidy = await subsidyModel.create(req.body);
    res.status(201).json({
        success: true,
        subsidy,
        message: 'Added subsidy',
    });
});