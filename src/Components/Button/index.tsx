import styled from "styled-components";

const Botao = styled.button`

`

function Button (props: {texto:string; type?:'button'|'submit'|'reset'}){
    return(
        <Botao>{props.texto}</Botao>
    )
}

export default Button
