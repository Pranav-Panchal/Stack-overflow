import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'
import questionsRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

const app = express(); //a app nu express server creat kriyu
dotenv.config();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/',(req, res) => {            // get na be peamerter che get(- , -) to sencond vadu che e call bck fun
    res.send("This is a stack oveflow clone API")  //arrow function no use kri ne reseve thse tyare
})                                                 // aa msg avse

app.use('/user', userRoutes)
app.use('/questions', questionsRoutes)
app.use('/answer', answerRoutes)

const PORT = process.env.PORT || 5000 // aaiya apde env vado port use krsu jo e na hoy tyare 5000 vado use thase 

//const CONNECTION_URL = "mongodb+srv://admin:admin@stack-overflow-clone.mzgf9ll.mongodb.net/?retryWrites=true&w=majority"  //DB creact kriye ena pachi link a ve e nakhi

const DATABASE_URL = process.env.CONNECTION_URL
mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))
