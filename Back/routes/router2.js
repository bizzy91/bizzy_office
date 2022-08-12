import express from "express"

const router2 = express.Router()

router2.get('/router2/get', (req, res) => {
    res.send("router2 GET")
})


export {router2}