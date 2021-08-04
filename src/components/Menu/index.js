import React from 'react'
import './index.css'
import {Link} from "react-router-dom"

const Menu = props => {
    return(
        <nav className="Menu">
            <ul>
                <li>
                    <Link to="/Lista">Lista de Clientes</Link>
                    
                </li>
                <li>
                    <Link to="/Form">Adicionar Cliente</Link> 
                </li>
            </ul>
        </nav>
    )
 }

export default Menu