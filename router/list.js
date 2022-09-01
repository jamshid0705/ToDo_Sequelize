const express=require('express')
const Rout=express.Router()
const listController=require('../controller/list')

Rout.route('/').get(listController.getAll).post(listController.addlist)
Rout.route('/:id').delete(listController.deleteList).patch(listController.update).get(listController.getOne)

module.exports=Rout