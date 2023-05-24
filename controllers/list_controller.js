const {findAllTask,add_new_Task,edit_Task,delete_Task_ById,sort_Task} = require(`../services/list_servic`)

exports.list_controller = (app) => {
    app.use("*", (req, res, next) => {
        console.log("\n\nURL = ", req.url);
        console.log("body = ", req.body);
        console.log("params = ", req.params);
        console.log("\n");
        next()
    })
    app.get("/", async (req, res) => {
        try {
            res.status(200).send( await findAllTask());
        } catch (error) {
            res.status(400).send(error);
        }
    })
    app.get("/Sort", async (req, res) => {
        try {
            res.status(200).send( await sort_Task());
        } catch (error) {
            res.status(400).send(error);
        }
    })
    app.post("/", async (req, res) => {
        try {
            res.status(200).send( await add_new_Task(req.body));
        } catch (error) {
            res.status(400).send(error);
        }
    })
    app.put("/:id", async (req, res) => {
        try {
            res.status(200).send( await edit_Task(req.params.id,req.body));
        } catch (error) {
            res.status(400).send(error);
        }
    })
    app.delete("/:id", async (req, res) => {
        try {
            res.status(200).send( await delete_Task_ById(req.params.id));
        } catch (error) {
            res.status(400).send(error);
        }
    })

    
}

