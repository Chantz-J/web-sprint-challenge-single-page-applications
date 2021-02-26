import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from 'styled-components'

import Header from './components/Header'
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'

const StyledHero = styled.section`
    border: 1px solid black;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export default function Content() { 


    return (
        <div>
            <Header />

            <Router>
                <StyledHero>
                    <Link to='/'>Pizza?</Link>
                    <Link to='/pizza-maker'>Pizza?</Link>
                </StyledHero>

                <Switch>
                    <Route exact path='/'> 
                        <Home />
                    </Route>
                    <Route  path='/pizza-maker'>
                        <PizzaForm />
                    </Route> 
                </Switch>

            </Router>

        </div>
    )
}