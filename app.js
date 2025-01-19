const express =  require("express")
const app = express()

const routes = require("./Routes/filter_routes")


app.set("view engine","ejs")
app.set("views","Views")
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",routes)


app.listen('3000',()=>{
    console.log("App Running Successfully on 3000")

})