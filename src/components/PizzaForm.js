import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const FormSection = styled.section``


export default function PizzaForm(){

    let history = useHistory()

    return (
        <FormSection>
            <button onClick={() => history.goBack()}>Go home.</button>
        </FormSection>
    )
}