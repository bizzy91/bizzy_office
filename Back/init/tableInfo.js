// DB Schema, https://www.notion.so/artifriends/DB-Schema-99853f00852c40089267330d644bbe43
// Create Query 를 생성한다.
function MakeCreateQuery(table) {
    let createQuery = "CREATE TABLE "
    // 테이블 이름 넣기
    createQuery += `${table["tableName"]} (`
    delete table["tableName"]
    // 칼럼 이름, 속성 넣기
    for ( const [key, value] of Object.entries(table) ) {
        createQuery += `${key} ${value}, `
    }
    createQuery = createQuery.slice(0, -2)
    createQuery += `);`
    
    return createQuery
}

// Employee Table Infomation
const EmployeeInfo = {
    tableName: "Employee",
    user_id: "INT AUTO_INCREMENT PRIMARY KEY",
    terminal_id: "INT",
    user_password: "VARCHAR(128) NOT NULL",
    user_salt: "VARCHAR(128) NOT NULL",
    name: "VARCHAR(16) NOT NULL",
    email: "VARCHAR(64) NOT NULL",
    authority: "INT NOT NULL",
    start_date: "DATE NOT NULL",
    resignation_date: "DATE",
    state: "VARCHAR(16) NOT NULL"    
}
// Attendance Table Information
const AttendanceInfo = {
    tableName: "Attendance",
    id: "INT AUTO_INCREMENT PRIMARY KEY",
    log_date: "DATETIME NOT NULL",
    user_id: "INT NOT NULL",
    first_time: "time",
    last_time: "time",
    get_in: "time",
    get_out: "time"
}
// Log Table Information
const LogInfo = {
    tableName: "Log",
    id: "INT AUTO_INCREMENT PRIMARY KEY",
    log_date: "DATETIME NOT NULL",
    user_id: "INT NOT NULL",
    log_content: "TEXT NOT NULL"
}

// Query(String) 작성
const Employee = MakeCreateQuery(EmployeeInfo)
const Attendance = MakeCreateQuery(AttendanceInfo)
const Log = MakeCreateQuery(LogInfo)
// Query 내보내기
export { Employee, Attendance, Log }