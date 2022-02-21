import express from 'express'
import ProductsData from './ProductsData.js'
import cors from 'cors'


const app = express()
app.use(cors())




app.listen(8000,()=>{
    console.log("connected")
})