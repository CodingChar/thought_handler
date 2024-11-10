

//Express related imports
const express = require('express')
const app = express()


//Dotenv Configuration 
const dotenv = require('dotenv')
dotenv.config()





//static files



app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.get('/', (req,res) => {
    res.send('Hello World!')
})


app.listen(process.env.PORT, () => {
    console.log(`The server is listening at http://localhost:${process.env.PORT}`)
})
