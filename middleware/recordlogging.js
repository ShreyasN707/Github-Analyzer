const fs=require('fs')
const express=require("express")

let i=0
const logger=(req,res,next)=>{
    const log=`\n${++i} Time : ${Date.now()} | Client: ${req.ip} | Query_data(1): ${req.body.user1} | Query_data(2): ${req.body.user2}| path: ${req.path}| host: ${req.hostname}| HTTP: ${req.secure}|protocol:${req.protocol}`
    fs.appendFile('Server_logs.txt',log,()=>{
        next()
    })
}

module.exports={
    logger
}