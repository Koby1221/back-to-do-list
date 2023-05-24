const {add_new_User,check_user} = require(`../services/user_servic`)

exports.user_controller = (app) => {

    app.post("/user", async (req, res) => {
    try {
        res.status(200).send( await add_new_User(req.body));
    } catch (error) {
        res.status(400).send(error);
    }
})

    app.post("/user/c", async (req, res) => {
    try {
        res.status(200).send( await check_user(req.body));
    } catch (error) {
        res.status(400).send(error);
    }
})

}