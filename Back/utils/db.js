import mysql from "mysql2"

class DB {
    constructor() {
        this.pool = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "12345678",
            database: "DUTY_ARTIFRIENDS_DB"
        })
        this.promisePool = this.pool.promise()
    }
    async exec(sql) {
        let [rows, fields] = await this.promisePool.query(sql)
        console.log(rows)
        // return rows
    }
    // async end() {
    //     this.pool.end()
    // }
}

// const q1 = "select * from MEMBER_TB limit 2;"
// const q2 = "select * from ATTENDANCE_TB limit 2;"
// const db = new DB()

// db.exec(q1)
// db.exec(q2)
// db.end()

// const pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "12345678",
//     database: "DUTY_ARTIFRIENDS_DB"
// })
// const promisePool = pool.promise()
// const [rows, field] = await promisePool.query("select * from MEMBER_TB limit 2;")
// console.log(rows)
// const [rows2, field2] = await promisePool.query("select * from ATTENDANCE_TB limit 2;")
// console.log(rows2)
// pool.end()

export { DB }