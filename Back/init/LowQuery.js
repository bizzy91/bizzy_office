import mysql from "mysql2"
import dotenv from "dotenv"
// "./.env" 파일에서 환경 변수를 불러온다.
dotenv.config({path: "../.env"})

console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)

// // DB 커넥션을 생성한다.
// const con = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// })

// const employee1 = `INSERT INTO Employee (user_password, user_salt, name, email, authority, start_date, state) VALUES ("1234", "1234", "admin", "admin@artifriends.com", 1, "2022-01-01", "approved")`
// const employee2 = `INSERT INTO Employee (user_password, user_salt, name, email, authority, start_date, state) VALUES ("1234", "1234", "qwer", "qwer@artifriends.com", 2, "2022-01-01", "approved")`
// const employee3 = `INSERT INTO Employee (user_password, user_salt, name, email, authority, start_date, state) VALUES ("1234", "1234", "asdf", "asdf@artifriends.com", 2, "2022-01-01", "approved")`

// con.query(employee1, (err) => { if (err) throw err; console.log(`Success!`);})
// con.query(employee2, (err) => { if (err) throw err; console.log(`Success!`);})
// con.query(employee3, (err) => { if (err) throw err; console.log(`Success!`);})
// // DB 커넥션을 종료한다.
// con.end()