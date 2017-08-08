module.exports ={
    getUser: (req, res) => {
        console.log(req.user)
        res.send("hello")
    }
}