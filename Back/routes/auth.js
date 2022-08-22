import express from "express"

const auth = express.Router()

auth.get('/auth', (req, res) => {
    res.send('auth GET!')
})
auth.post('/auth/signin', (req, res) => {
    res.send("...")
})
auth.post('/auth/signup', (req, res) => {
    res.send("...")
})


export { auth }