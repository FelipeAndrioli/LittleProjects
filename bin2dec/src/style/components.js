import styled from 'styled-components'

export const Container = styled.div`
    width: 500px;
    height: 500px;
    position:relative; /*it can be fixed too*/
    background: #F78E69;
    left:0; 
    right:0;
    top:0; 
    bottom:0;
    margin:auto;
    max-width:100%;
    max-height:100%;
    overflow:auto;
    border-style: solid;
    border-width: 1px;
    text-align: center;
`

export const InputBinary = styled.input`
    width: 75%;
    height: 10%;
    position: relative;
    display: inline-block;
    top: 70%;
    background: #F78E69;
    border: 0;
    border-bottom: 2px solid #F7EF99;
    font-size: 25px;
    text-align: center;
    color: #F7EF99;
    font-family: Arial, Helvetica, sans-serif;
    outline: 0;

    &::placeholder {
        font-family: Arial, Helvetica, sans-serif;
        color: #F7EF99;
    }

    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`
export const PageTitle = styled.h1`
    position: static;
    display: inline-block;
    width: 100%;
    padding-top: 0.5em;
    color: #F1BB87;
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
`

export const DecimalOutput = styled.p`
    margin: 0;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    color: #ABE188;
    font-size: 50px;
    font-family: Arial, Helvetica, sans-serif;
    
`