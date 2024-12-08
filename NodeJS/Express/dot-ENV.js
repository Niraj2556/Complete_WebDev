server.js
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDb();
const app = express();
const port = process.env.PORT;
app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})





// .env
// PORT=3000
// CONNECTION_STRING=mongodb+srv://admin:<password>@projectcluster.seivcyb.mongodb.net/mycontacts-backend?retryWrites=true&w=majority
// ACCESS_TOKEN_SECRET=AlmaBetter