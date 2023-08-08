const express = require("express");
const dotenv = require("dotenv").config()
const connectDb = require('./config/dbConnection')
const ErrorHandler = require('./middleware/ErrorHandler')
const port = process.env.PORT || 5000;
connectDb()
const app = express()
app.use(express.json())
app.use("/api/contacts", require("./routes/ContactRoutes"))
app.use("/api/users", require("./routes/UsersRoutes"))
app.use(ErrorHandler)
app.listen(port, () => {
    console.log(`the server is runnig on port ${port}`)
})