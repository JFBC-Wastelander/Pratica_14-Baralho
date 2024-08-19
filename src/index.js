const express = require("express")
const naipe_controller = require("./controllers/naipe.js")
const app = express()
const port = 3000
app.use(express.json())

app.post("/naipe", (req, res) => {
    const naipe = req.body
    const code = naipe_controller.store(naipe)
    res.status(code).json()
})

app.get("/naipe", (req, res) => {
    res.json(naipe_controller.index())
})

app.get("/naipe/:id", (req, res) => {
    res.json(naipe_controller.show(req.params.id))
})

app.put("/naipe/:id", (req, res) => {
    const naipe = req.body
    const code = naipe_controller.update(req.params.id, naipe)
    res.status(code).json()
})

app.delete("/naipe/:id", (req, res) => {
    res.json(naipe_controller.destroy(req.params.id))
})

app.listen(port, () => {
    console.log("Gerenciador de baralho executando na porta: " + port)
})