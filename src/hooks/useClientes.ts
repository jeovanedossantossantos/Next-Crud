import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteInterface from "../core/ClienteInterface"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes(){
    const repo: ClienteInterface = new ColecaoCliente()
    const {formularioVisivel, tabelaVisivel,exibirFormulario,exibirTabela} = useTabelaOuForm()
  
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    
    const [clientes, setClientes] = useState<Cliente[]>([])
    
    
    useEffect(obterTodos,[])
  
    function obterTodos(){
      repo.obterTodos().then(clientes =>{
  
        setClientes(clientes)
        exibirTabela()
      })
    }
    {/*const clientes = [
      new Cliente('Ana', 34, '1'),
      new Cliente('João', 45, '2'),
      new Cliente('Bernado', 14, '3'),
      new Cliente('Lisca', 33, '4')
    ]*/}
  
    function selecionadoCliente(cliente: Cliente){
      setCliente(cliente)
      exibirFormulario()
    }
    async function excluirCliente(cliente: Cliente){
      await repo.excluir(cliente)
      obterTodos()
    }
    async function salvarCliente(cliente: Cliente){
      
      await repo.salvar(cliente)
      obterTodos()
      
  
    }
    function novoCliente(){
      setCliente(Cliente.vazio())
      exibirFormulario()
    }

    return{
        cliente,
        clientes,
        tabelaVisivel,
        exibirTabela,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionadoCliente,
        obterTodos,


    }
}