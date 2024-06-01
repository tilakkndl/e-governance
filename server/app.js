const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const userRouter = require('./route/userRoute');
const errorHanldingMiddleware = require("./middleware/error")
const cropRouter = require('./route/cropRoute');
const routerRecipie = require("./route/recipieRouter")
const notifyRouter = require("./route/notifyingRoute")
const subsidyRouter = require("./route/subsidyRoute")
//MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log('Hello from MIDDLEWARE');
  req.requestTime = new Date().toISOString();
  // console.log(req.headers)
  next();
});

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);


app.use("/api/v1/users/", userRouter)
app.use("/api/v1/admin/", cropRouter)
app.use("/api/v1/admin/", routerRecipie)
app.use("/api/v1/admin/", notifyRouter)
app.use("/api/v1/", subsidyRouter)


//Global error handling middleware
app.use(errorHanldingMiddleware)

module.exports = app;

