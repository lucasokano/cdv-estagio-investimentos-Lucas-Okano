import React from 'react'
import './index.css'

const Form = () =>{
    return(
        <form action='/add' method='POST'>
        
            <label>NOME</label>
            <input type="text" name="nome"></input>
            <br></br>

            <label>CPF</label>
            <input type="number" name="nome"></input>
            <br></br>
                        
            <label>Etapa Atual</label>
            <select id="etapa">
                <option value="">Opções</option>
                <option value="Aguardando assinatura de documentos">Aguardando assinatura de documentos</option>
                <option value="Aguardando transferência de recursos">Aguardando transferência de recursos</option>
                <option value="Gestão de patrimônio ativa">Gestão de patrimônio ativa</option>
            </select>

            <br></br>
            <br></br>
            
            <button type="submit" onClick={()=>{}}>ENVIAR</button> 

        </form>  
    )
    
}

export default Form