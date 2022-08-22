import mysql from "mysql2"
import dotenv from "dotenv"
// "./.env" 파일에서 환경 변수를 불러온다.
dotenv.config({path: "../.env"})

// DB 커넥션을 생성한다.
const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})
// DB 생성
con.query(`CREATE DATABASE ${process.env.DB_NAME}`, (err) => { if (err) throw err; console.log(`Database "${process.env.DB_NAME}" created!`);})
// DB 커넥션을 종료한다.
con.end()
