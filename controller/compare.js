const {analyzerfetch}=require("./apifetch")

const compare=(req,res)=>{
    const user1=req.body.user1;
    const user2=req.body.user2;

    if (!user1) {
        return res.render("index", { error: "Please enter a username", data: null });
    }

    if(user1){
        let result=analyzerfetch(user1);
        res.status(200).render('result',{data:result,error:null})
    }

    if(user2!=none){
        
    }
}

module.exports={
    compare
}

