import express from "express"
import dotenv from "dotenv"
import mysql from "mysql2"
import { DB } from "../utils/db.js"
// "../.env" 파일에서 환경 변수를 불러온다.
dotenv.config({path: "../.env"})

const admin = express.Router()

console.log(process.env.DB_HOST)
admin.get('/admin', (req, res) => {
    // res.send('admin GET!')
    res.send(process.env.DB_HOST)
})
admin.post('/admin/employee', async (req, res) => {
    // const result = db.exec(`select * from Employee;`)
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })
    const promisePool = pool.promise()
    const [rows, field] = await promisePool.query("select * from Employee;")
    console.log(rows)
    res.send(rows)
    // res.send({id:1,name:2})
})
admin.post('/admin/attendance', (req, res) => {
    res.send("...")
})
admin.post('/admin/vacation', (req, res) => {
    res.send("...")
})


export { admin }