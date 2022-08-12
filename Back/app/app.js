import express from "express"
import cors from "cors"
import { router1 } from "../routes/router1.js"
import { router2 } from "../routes/router2.js"
import { DB } from "../utils/db.js"


class App {
    constructor() {
        this.app = express()
        this.setMiddleWare()
        this.setRouting()
        this.setDatabase()
    }
    setMiddleWare() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(cors())
    }
    setRouting() {
        this.app.use(router1)
        this.app.use(router2)
    }
    setDatabase() {
        this.app.use(DB)
    }
}

const app = new App().app
export { app }
