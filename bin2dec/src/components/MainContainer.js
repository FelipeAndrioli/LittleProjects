import React, { useState } from 'react'
import { Container, InputBinary, DecimalOutput, PageTitle } from '../style/components'

//export default class MainContainer extends Component {
function MainContainer() {

        const[dec, setDec] = useState('')

        function reverseArray(input) {
            let newArray = []

            for(let i = input.length - 1; i >= 0; i--) {
                newArray.push(input[i])
            }

            return newArray
        }

        function handleConvert(props) {

            let dec = 0

            let newArray = reverseArray(props)

            for(let i = newArray.length - 1; i >= 0; i--) {
                if (newArray[i] == 0 || newArray[i] == 1) {
                    dec += newArray[i] * (Math.pow(2, i))
                }else {
                    return 'INVALID NUMBER'
                }
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
