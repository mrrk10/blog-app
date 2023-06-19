const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const cors=require('cors')
app.use(cors())  
const colors=require('colors')


const Blogs=require('./src/models/blog')


require('dotenv').config()


const connectToDb=require('./src/connection/connect')
connectToDb()

const Users=require('./src/models/userModel')


const loginRoute=require('./src/routes/loginRoute')
app.use(loginRoute)


const registerRoute=require('./src/routes/registerRoute')
app.use(registerRoute)

const blogRoute=require('./src/routes/blogRoute')
app.use(blogRoute);





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})