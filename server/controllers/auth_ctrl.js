module.exports={
    login:(req, res, next)=>{
        const database = req.app.get('db')
        let {username , password} = req.body
        database.authUser([username, password]).then((dbResponse) => {
            res.status(200).send(dbResponse)
        })
    },
    logout:(req, res, next)=>{
        // kill session 
        res.status(200).send('logout trigger')
    },
    register:(req, res, next)=>{
        // Check if username already exist then create new user.
        res.status(200).send('resgister trigger')
    },
}