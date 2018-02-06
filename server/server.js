require('dotenv').config()
const express = require('express')
const massive = require('massive')

const app = express()
// Database Connect
const CONNECTION_STRING = process.env.CONNECTION_STRING
massive({connectionString: CONNECTION_STRING}).then((db)=>app.set('db', db))

// Middleware Imports
const bodyParser= require('body-parser')

//Top Level Middleware
app.use(bodyParser.json())

// Controller Imports
const auth_ctrl = require('./controllers/auth_ctrl')

// Endpoints
//// Test endpoint
app.get('/api/test', ((req, res, next)=>{
    console.log('test endpoint hit on server')
    res.status(200).send(' response from test endpoint')
}))

app.get('/api/testDB', (req, res, next)=>{
    let database = app.get('db')
    database.getAll().then(dbResp=>{
        res.status(200).send(dbResp)
    })
})

//// Auth Controller
app.post('/api/login', auth_ctrl.login)

const port = 3002
app.listen(port, ()=>{console.log(`Rocking port: ${port}`)})