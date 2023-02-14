const aboutUsController = {
    aboutUsFunction : (req, res) =>{
        res.send(req.rootUser)
    }
}




module.exports = aboutUsController;