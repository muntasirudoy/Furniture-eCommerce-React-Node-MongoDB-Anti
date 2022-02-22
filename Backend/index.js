import express from 'express'
import ProductsData from './ProductsData.js'
import cors from 'cors'


const app = express()
app.use(cors())

app.get('/all_products', function (req, res) {
    res.send(ProductsData)
  })


app.listen(8000,()=>{
    console.log("connected")
})