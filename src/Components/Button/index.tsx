import styled from "styled-components";

const Botao = styled.button`
    align-self: center;
    background-color: #A9A9A9 ;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    color: #272626;
    cursor: pointer;
    font-size: 1.25rem;
    padding: 16px;
    width: 150px;
    
    &:active {
      background-color: #7CA6B7;
      box-shadow: 2px 2px 4px #0000009F inset;
    }


`

function Button (props: {texto:string; type?:'button'|'submit'|'reset'}){
    return(
        <Botao>{props.texto}</Botao>
    )
}

export default Button
