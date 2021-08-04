import React from 'react'
import './index.css'
import {Switch, Route} from 'react-router-dom'

import Lista from '../../views/Lista'
import Form from '../../views/Form'

const Content = () => {
    return(
        <div className="Content">
            <Switch>
                <Route path="/Lista">
                    <Lista/>
                </Route>

                <Route path="/Form">
                    <Form/>
                </Route>

            </Switch>
        </div>
    )
    
 }

export default Content