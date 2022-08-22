import { app } from "./app/app.js"
import dotenv from "dotenv"
// "./.env" 파일에서 환경 변수를 불러온다.
dotenv.config()

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})