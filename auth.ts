import express, { Request, Response } from 'express'
import cors from 'cors'
import passport from 'passport'
import session from 'express-session'

const test = require('./routes/test')


const app = express()

app.use(cors())
app.use(express.json())
// Add Session, initial passport for middleware, set passport session
app.use(session({ secret: 'cat' }))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api', test)

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})