
import React, { useState, useEffect } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import useClientes from '../hooks/useClientes'


export default function Home() {

  const {
    cliente, 
    clientes,
    tabelaVisivel,
    exibirTabela,
    excluirCliente, 
    novoCliente, 
    salvarCliente, 
    selecionadoCliente
   } = useClientes()

  return (
    <div className={`

      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples" >
        {tabelaVisivel ? (
            <>
            <div className="flex justify-end">
              <Botao cor="gray" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} 
                clienteSelecionado={selecionadoCliente}
                clienteExcluido={excluirCliente}/>
            
          </>
        ):(
          <Formulario 
            cliente={cliente }
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}

          ></Formulario>
        )}
        
        
      </Layout>
      
    </div>
  )
}
