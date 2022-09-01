const cors=require('cors')
const express=require('express')
const bodyparser=require('body-parser')
const app=express()
const listRout=require('../router/list')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/v1/lists',listRout)

module.exports=app