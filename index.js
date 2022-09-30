const express = require("express")
const morgan = require("morgan");
const app = express()
const { errorHandler,notfound } = require("./Server/Middlewares/ErrorMiddleware")

require("./Server/Database/Database")()
require("dotenv").config();

const port = process.env.PORT || 5000

app.use(morgan("tiny"))
app.use(express.json());

app.use('/',require('./Server/routes/router'))

app.use(notfound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});
