// express loaded
const express = require('express')

// methodOverride acquired
const methodOverride = require('method-override')

// configuring/setup mongo
const mongoConfig = require('./config')

// connecting mongoDB and establshing PORT
require('dotenv').config()

// Create express app
const app = express()

// Packaged route
const logRoutes = require('./routes/logRoutes')

// Identify port
const port = process.env.PORT

// View engine setup
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(express.json())
app.use(methodOverride("_method"))

// default url for packaged route
app.use('/logs', logRoutes)

// listen to port
app.listen(port, () => { console.log('Listening on port: ', port) })

// connect to DB
mongoConfig()