
import React, { useState, useEffect } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import ClienteInterface from '../core/ClienteInterface'
import ColecaoCliente from '../backend/db/ColecaoCliente'


export default function Home() {

  const repo: ClienteInterface = new ColecaoCliente()
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
  useEffect(obterTodos,[])

  function obterTodos(){
    repo.obterTodos().then(clientes =>{

      setClientes(clientes)
      setVisivel('tabela')
    })
  }
  {/*const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('João', 45, '2'),
    new Cliente('Bernado', 14, '3'),
    new Cliente('Lisca', 33, '4')
  ]*/}

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }
  async function clienteExcluido(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }
  async function salvarCliente(cliente: Cliente){
    
    await repo.salvar(cliente)
    obterTodos()
    

  }
  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  return (
    <div className={`

      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples" >
        {visivel === 'tabela' ? (
            <>
            <div className="flex justify-end">
              <Botao cor="gray" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} 
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido}/>
            
          </>
        ):(
          <Formulario 
            cliente={cliente }
            clienteMudou={salvarCliente}
            cancelado={()=>setVisivel('tabela')}

          ></Formulario>
        )}
        
        
      </Layout>
      
    </div>
  )
}
