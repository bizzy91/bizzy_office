import express from "express"

const user = express.Router()

user.get('/user', (req, res) => {
    res.send('user GET!')
})
user.post('/user/attendance', (req, res) => {
    res.send("...")
})
user.post('/user/vacation', (req, res) => {
    res.send("...")
})


export { user }