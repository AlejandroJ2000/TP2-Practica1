import NotasModel from "./DAO/model.js"

class Factory {
    static create(persistance) {
        switch(persistance) {
            case "memory":
                console.log("memory persistance")
                return new NotasModel()

            default:
                console.log("default persistance")
                return new NotasModel() 
        }
    }
}

export default Factory