import mysql from "mysql2"
import dotenv from "dotenv"
import { Employee, Attendance, Log } from "./tableInfo.js"
// "./.env" 파일에서 환경 변수를 불러온다.
dotenv.config({path: "../.env"})

// DB 커넥션을 생성한다.
const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

con.query(Employee, (err) => { if (err) throw err; console.log(`table created!`);})
con.query(Attendance, (err) => { if (err) throw err; console.log(`table created!`);})
con.query(Log, (err) => { if (err) throw err; console.log(`table created!`);})
// DB 커넥션을 종료한다.
con.end()
