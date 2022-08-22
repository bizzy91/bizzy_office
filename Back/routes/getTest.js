import express from "express"

const getTest = express.Router()

getTest.get('/', (req, res) => {
    res.send('Server is running!')
})

export { getTest }