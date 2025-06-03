import fs from 'fs'
import path from 'path'

class NotasModel{
    constructor() {
        this.filePath = path.resolve('notas.json')

        if(fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath)
            this.notas = JSON.parse(data)
        } else {
            this.notas = [
                { id: 1, nombre: 'Juana Gimenez', nota: 10, curso: '21A'},
                { id: 2, nombre: "Luciano Rodriguez", nota: 2, curso: '21B'},
                { id: 3, nombre: "Pepe Sanchez", nota: 9, curso: '20A'},
            ]
            this.saveNotasToFile()
        }
    }    

    saveNotasToFile() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.notas, null, 2))
    }

    getNotas = async () => {
        return this.notas
    }

    postNota = async (newNota) => {
        newNota.id = this.notas.length ? this.notas[this.notas.length - 1].id + 1 : 1
        this.notas.push(newNota)
        this.saveNotasToFile()
        return newNota            
    }

    getPromedio = async () => {
        if(this.notas.length === 0) return "No hay notas registradas."

        let suma = 0
        for (let i = 0; i < this.notas.length; i++) {
            suma += this.notas[i].nota
        }

        let promedio = suma / this.notas.length
        return `El promedio de notas ingresadas al momento es: ${promedio.toFixed(2)}`
    }

    getNotaMasBaja = async () => {
        if (this.notas.length === 0) return "No hay notas registradas."

        let minima = this.notas[0]

        for (let i = 1; i < this.notas.length; i++){
            if(this.notas[i].nota < minima.nota) {
                minima = this.notas[i]
            }
        }

        return `La nota más baja es ${minima.nota} del parcial de ${minima.nombre}`
    }

    getNotaMasAlta = async () => {
        if (this.notas.length === 0) return "No hay notas registradas."

        let maxima = this.notas[0]

        for (let i = 1; i < this.notas.length; i++){
            if(this.notas[i].nota > maxima.nota) {
                maxima = this.notas[i]
            }
        }

        return `La nota más alta es ${maxima.nota} del parcial de ${maxima.nombre}`
    }
}
export default NotasModel