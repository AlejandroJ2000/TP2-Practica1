import Factory from "../models/Factory.js";

class NotasService {
    constructor() {
        this.notasModel = Factory.create(process.env.PERSISTENCE)
    }

    getNotas = async () => {
        return await this.notasModel.getNotas()
    }

    postNota = async (newNota) => {
        return await this.notasModel.postNota(newNota)
    }

    getPromedio = async () => {
        return await this.notasModel.getPromedio()
    }

    getNotaMasBaja = async () => {
        return await this.notasModel.getNotaMasBaja()
    }

    getNotaMasAlta = async () => {
        return await this.notasModel.getNotaMasAlta()
    }
}

export default NotasService