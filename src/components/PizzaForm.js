import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const FormSection = styled.section``


export default function PizzaForm(props){

    //State passed as props from Content component
    const {values, update, submit} = props

    //handle update using updateFrom as callback from Content
        const change = e => {
            const { name, value, type, checked } = e.target
            const valueToUse = type === 'checkbox' ? checked : value
            update(name, valueToUse)
        }

        const handleSubmit = e => {
            e.preventDefault()
            submit()
        }

    let history = useHistory()

    return (
        <FormSection>
            <div>
                <h2>Build Your Own Pizza</h2>
            </div>
            <button onClick={() => history.goBack()}>Go home.</button>
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
                <label> Name
                    <input 
                    name='name' 
                    type='text' 
                    placeholder='Your Name'
                    values={values.name} 
                    onChange={change}
                    />
                </label>
                <label> Choose your size
                    <select value={values.size} name='size' onChange={change}>
                        <option value='1'>Medium</option>
                        <option value='2'>Large</option>
                    </select>
                </label>Pepperoni
                    <input 
                    name='pepperoni' 
                    type='checkbox' 
                    value={values.pepperoni}
                    checked={values.pepperoni} 
                    onChange={change}
                    />
                <label>Bacon
                    <input 
                    name='bacon' 
                    type='checkbox'                     
                    checked={values.bacon} 
                    onChange={change}
                    />
                </label>
                <label>Extra Cheese
                    <input 
                    name='cheese' 
                    type='checkbox'  
                    checked={values.cheese} 
                    onChange={change}
                    />
                </label>
                <label>Sausage
                    <input 
                    name='sausage' 
                    type='checkbox'  
                    checked={values.sausage} 
                    onChange={change}
                    />
                </label>
                <label>Special Instructions
                    <input 
                    name='special' 
                    type='text' 
                    placeholder='Your Name'
                    values={values.special} 
                    onChange={change}
                    />
                </label>
            
            <button>Submit</button>
            </form>
        </FormSection>
    )
}