import NotasController from "../controllers/controller.js";
import express from "express"

class Router {
    constructor() {
        this.router = express.Router()
        this.notasController = new NotasController()
    }

    startRoutes() {
        this.router.get("/notas", this.notasController.getNotas)
        this.router.post("/notas", this.notasController.postNotas)
        this.router.get("/notas/promedio", this.notasController.getPromedio)
        this.router.get("/notas/min", this.notasController.getNotaMasBaja)
        this.router.get("/notas/max", this.notasController.getNotaMasAlta)

        return this.router
    }
}
export default Router