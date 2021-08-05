import { assertTSBigIntKeyword } from '@babel/types'
import { ClientSession } from 'mongodb'
import React, { useState } from 'react'
import api from '../../api'

const Lista = () => {

    const[cliente, setCliente] = useState(0);

    async componentDidMount() {
        const response = await api.get('cliente');
        
        this.setCliente(response.data); 
    }

    return(
        <div>
            <h1>Lista de Clientes</h1>
            <ul>
                {cliente.map(cliente =>{
                    <li key={cliente._key}>
                    <h2>Nome:{cliente.nome}</h2>
                    <h2>Nome:{cliente.cpf}</h2>
                    <h2>Nome:{cliente.etapa}</h2>
                    </li>
                })}
            </ul>
       </div>
    )
}

export default Lista