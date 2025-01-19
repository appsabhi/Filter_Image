const filter_controller = require("../Controller/filter_controller")
const express = require("express")
const Router = express.Router()
const upload = require("../util/multer");


Router.get("/",filter_controller.get_home)
Router.post(
    "/image_filter",
    upload.single("image"),
    filter_controller.filter_image
  )


module.exports=Router