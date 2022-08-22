import mysql from "mysql2"


class DB {
    constructor(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) {
        this.pool = mysql.createPool({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME
        })
        this.promisePool = this.pool.promise()
    }
    exec(sql) {
        let [rows, fields] = this.promisePool.query(sql)
        console.log(rows)
        return rows
    }
    end() {
        this.pool.end()
    }
}

// const q1 = "select * from MEMBER_TB limit 2;"
// const q2 = "select * from ATTENDANCE_TB limit 2;"
// const db = new DB(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)

// const f1 = async () => {
//     await db.exec(q1)
//     await db.exec(q2)
//     await db.end()

// };

// f1();

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