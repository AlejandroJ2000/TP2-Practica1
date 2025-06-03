import NotasService from "../services/service.js";

class NotasController {
    constructor() {
        this.notasService = new NotasService()
    }

    getNotas = async (req, res) => {
        try {
            const notas = await this.notasService.getNotas()
            res.status(200).json(notas)
        } catch (error) {
            res.status(500).json({ error: "Error fetching notas" })
        }
    }

    postNotas = async (req, res) => {
        try {
            const newNota = req.body
            if (!newNota || !newNota.nota) {
                return res.status(400).json({ error: "Nota is required" })
            }
            const createdNota = await this.notasService.postNota(newNota)
            res.status(201).json(createdNota)
        } catch(error) {
            res.status(500).json({ error: " Error creating nota "})
        }
    }

    getPromedio = async (req, res) => {
        try {
            const promedio = await this.notasService.getPromedio()
            res.status(200).json(promedio)
        } catch(error) {
            res.status(500).json({ error: "Error calculating promedio" })
        }
    }

    getNotaMasBaja = async (req, res) => {
        try {
            const notaBaja = await this.notasService.getNotaMasBaja()
            res.status(200).json(notaBaja)
        } catch(error) {
            res.status(500).json({ error: "Error calculating lowest nota" })
        }
    }

    getNotaMasAlta = async (req, res) => {
        try {
            const notaAlta = await this.notasService.getNotaMasAlta()
            res.status(200).json(notaAlta)
        } catch(error) {
            res.status(500).json({ error: "Error calculating highest nota" })
        }
    }
}
export default NotasController