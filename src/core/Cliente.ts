export default class Cliente{
    _id: string
    _nome: string
    _idade: number

    constructor(nome: string, idade: number, id: string=null){

        this._nome = nome
        this._idade = idade
        this._id = id
    }
    static vazio(){
        return new Cliente("", 0)
    }
    get id(){
        return this._id
    }
    get nome(){
        return this._nome
    }
    get idade(){
        return this._idade
    }
}