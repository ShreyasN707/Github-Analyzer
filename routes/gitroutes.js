const express=require("express")

const router=express.Router()
const {analyzerfetch}=require('../controller/apifetch')
const {compare}=require('../controller/compare')

router.get("/analyzer",(req,res)=>res.status(200).render('index'))
router.post('/analyzer',compare)

module.exports={
    router
}