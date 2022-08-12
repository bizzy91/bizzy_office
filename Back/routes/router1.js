import express from "express"

const router1 = express.Router()

router1.get('/', (req, res) => {
    res.send('Hello World!')
})

router1.get('/router1/get', (req, res) => {
    res.send("router1 GET")
})


export {router1}