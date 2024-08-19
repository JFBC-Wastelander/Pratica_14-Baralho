const express = require("express")
const naipe_controller = require("./controllers/naipe.js")
const carta_controller = require("./controllers/carta.js")
const app = express()
const port = 3000
app.use(express.json())

//GERENCIAMENTO DE NAIPES
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
//FIM DO GERENCIAMENTO DE NAIPES

//GERENCIAMENTO DE CARTAS
app.post("/carta", (req, res) => {
    const carta = req.body
    const code = carta_controller.store(carta)
    res.status(code).json()
})

app.get("/carta", (req, res) => {
    res.json(carta_controller.index())
})

app.get("/carta/:id", (req, res) => {
    res.json(carta_controller.show(req.params.id))
})

app.put("/carta/:id", (req, res) => {
    const carta = req.body
    const code = carta_controller.update(req.params.id, carta)
    res.status(code).json()
})

app.delete("/carta/:id", (req, res) => {
    res.json(carta_controller.destroy(req.params.id))
})
//FIM DO GERENCIAMENTO DE CARTAS

app.listen(port, () => {
    console.log("Gerenciador de baralho executando na porta: " + port)
})