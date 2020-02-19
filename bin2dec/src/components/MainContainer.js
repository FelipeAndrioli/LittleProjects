import React, { useState } from 'react'
import { Container, InputBinary, DecimalOutput, PageTitle } from '../style/components'

//export default class MainContainer extends Component {
function MainContainer() {
    //render() {
/*
101

*/
        const[dec, setDec] = useState('')

        function handleConvert(props) {

            let dec = 0

            for(let i = 0; i < props.length; i++) {
                dec += props[i] * (Math.pow(2, i))
            }
            
            return dec
        }

        return (

            <Container>

                <PageTitle>Binary to Decimal Conversion</PageTitle>

                <DecimalOutput>{dec}</DecimalOutput>

                <InputBinary type = "number" onChange = {event => setDec(handleConvert(event.target.value))} ></InputBinary>

            </Container>
        )
//}
}

export default MainContainer
