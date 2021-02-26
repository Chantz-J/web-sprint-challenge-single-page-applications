import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from 'styled-components'
import * as yup from 'yup'

import Header from './components/Header'
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'
import formSchema from './validation/shema'

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
    //Intial empty errors
    const initialFormErrors = {
        name: '',
    }

    /*All State: #1 Form State
                 #2 Order State
                 #3 Button disable State*/
    const [form, setForm] = useState(initalFormValues)
    const [orders, setOrders] = useState([])
    const [disabled, setDisabled] = useState(true)
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    //Keep track of changes and validate against schema
    const updateForm = (inputName, inputValue) => {
        yup.reach(formSchema, inputName)
        .validate(inputValue)
        .then(() => {
            setFormErrors({...formErrors, [inputName]: ''})
        })
        .catch(err => {
            setFormErrors({...formErrors, [inputName]: err.errors[0]})
        })
        setForm({
            ...form,
            [inputName] : inputValue
        })   
    }

    //Handle submit. The event is handled in the Form (child component)
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

    //Check against schema and validate along the way
    const inputChange = (name, value) => {
        yup.reach(formSchema, name)
        .validate(value)
        .then(() => {
            setFormErrors({...formErrors, [name]: ''})
        })
        .catch(err => {
            setFormErrors({...formErrors, [name]: err.errors[0]})
        })
        setForm({
            ...form,
            [name] : value
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
                            <PizzaForm 
                            values={form}
                            update={updateForm} 
                            submit={handleSubmit} 
                            disabled={disabled} 
                            errors={formErrors}
                            />
                        </Route> 
                    </Section>
                </Switch>
            </Router>

        </div>
    )
}