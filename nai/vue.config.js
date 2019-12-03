let data=require("./mock/zh.json")
module.exports={
    devServer:{
        before(app){
            app.get("/list",(req,res)=>{
                res.send(data.items)
            })
            app.get("/getxq",(req,res)=>{
                let filtername=data.items.filter(item=>item.id==req.query.id)
                res.send(filtername)
            })
        }
    }
}