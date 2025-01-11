const router=require("express").Router();
const fs=require("fs");

router.get("/",(req,res)=>{

    fs.readFile("./db/notes.json",(err,data)=>{
        if(err){
            res.status(500).json(err)
        }else{
            res.json(JSON.parse(data))
        }
    })
})

module.exports=router;