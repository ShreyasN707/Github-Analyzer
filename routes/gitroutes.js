const express=require("express")
const {logger}=require('../middleware/recordlogging')
const router=express.Router()
const {analyzerfetch}=require('../controller/apifetch')
const {compare}=require('../controller/compare')

router.get("/",(req,res)=>res.status(200).render('index', { data: null, error: null }))
router.post('/analyzer',logger,compare)

module.exports={
    router
}