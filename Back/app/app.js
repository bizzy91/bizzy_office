import express from "express"
import cors from "cors"
import { getTest } from "../routes/getTest.js"
import { auth } from "../routes/auth.js"
import { admin } from "../routes/admin.js"
import { user } from "../routes/user.js"


class App {
    constructor() {
        this.app = express()
        this.setMiddleWare()
        this.setRouting()
    }
    setMiddleWare() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(cors())
    }
    setRouting() {
        this.app.use(getTest)
        this.app.use(auth)
        this.app.use(admin)
        this.app.use(user)
    }
}

const app = new App().app
export { app }
