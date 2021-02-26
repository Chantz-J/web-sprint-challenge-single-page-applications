import React, {useState, useEffect} from 'react'
import axios from 'axios'
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
const Section = styled.section`
    border: 1px solid black;
    padding: 5rem;
    margin: 5rem;
`

export default function Content() { 

    //Intial state of form (empty of course)
    const initalFormValues = {
        name: '',
        size: '',
        pepperoni: false,
        bacon: false,
        cheese: false,
        sausage: false,
        special: ''
    }

    /*All State: #1 Form State
                 #2 Order State*/
    const [form, setForm] = useState(initalFormValues)
    const [orders, setOrders] = useState([])

    //Keep track of changes
    const updateForm = (inputName, inputValue) => {
        setForm({
            ...form,
            [inputName]: inputValue
        })
    }

    const handleSubmit = () => {
        console.log(orders)//Should be empty before post
        axios
        .post(`https://reqres.in/api/users`, form)
        .then(res => {
            setOrders(orders.push(res.data))//Set empty state to response
            console.log(`success`, res.data)//Just checking...
            console.log(orders)//Did it work?
        })
    }

    return (
        <div>
            <Header />

            
            <Router>
                <StyledHero>
                    <Link to='/'>Pizza?</Link>
                    <Link to='/pizza-maker'>Pizza?</Link>
                </StyledHero>

                <Switch>
                    <Section>
                        <Route exact path='/'> 
                            <Home />
                        </Route>
                        <Route  path='/pizza-maker'>
                            <PizzaForm values={form} update={updateForm} submit={handleSubmit} />
                        </Route> 
                    </Section>
                </Switch>
            </Router>

        </div>
    )
}