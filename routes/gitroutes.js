const express=require("express")

const router=express.Router()
const {analyzerfetch}=require('../controller/apifetch')

router.get("/analyzer",(req,res)=>res.status(200).render('index'))
router.post('/analyzer',analyzerfetch)

module.exports={
    router
}