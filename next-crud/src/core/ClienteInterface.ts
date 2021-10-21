import Cliente from "./Cliente";

export default interface ClienteInterface{
    salvar(cliente: Cliente):  Promise<Cliente>
    excluir(cliente: Cliente):  Promise<void>
    obterTodos(cliente?: Cliente):  Promise<Cliente[]>

}