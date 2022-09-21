const express = require('express')
const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users')
const { logger } = require('./middleware/middleware')
const cors = require('cors')
require('dotenv').config()

const app = express();
app.use(express.json())
const port = process.env.PORT;

const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true,//access-control-allow-credentials:true
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(cors)

app.get('/', logger, (req, res) => {
    res.send('Welcome')
})

app.use('/auth', logger, authRouter)

app.use('/users', logger, usersRouter)

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})