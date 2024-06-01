const Schedular = require("./../model/schedulerModel")
const catchAsync = require("./../utils/catchAsync")
const AppError = require("./../utils/appError")
const StartingDate = require("./../model/startingDateModel")

const calculatedDate = (inputDateStr, )=>{
// Input date in the given format
const inputDateStr = "Sun Sep 17 2023 06:19:41 GMT+0545";
const numberOfDaysToAdd = 7; // Change this to the number of days you want to add

// Convert the input string to a Date object
const inputDate = new Date(inputDateStr);

// Calculate the new date by adding the specified number of days
const newDate = new Date(inputDate);
newDate.setDate(inputDate.getDate() + numberOfDaysToAdd);

// Format the new date in the same format as the input
const options = {
  weekday: "short",
  month: "short",
  day: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "short",
};
const formattedDate = newDate.toLocaleString("en-US", options);

return formattedDate;
}


const TIMEGAP = [22, 4,  6, 40, 80, 10]

exports.createScheduleSeeding = catchAsync(async(req, res)=>{
    const {title} = req.body;
    const startingDate = await StartingDate.findById(req.user._id)
    const newSchedule = await Schedular.create({title, startingDate, endingDate: calculatedDate(startingDate, 22)})
    res.status(200).json({
        success: true,
        newSchedule
    })
})



