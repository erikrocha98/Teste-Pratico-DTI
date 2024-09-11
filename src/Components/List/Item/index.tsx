import styled from "styled-components"

const ItemLista= styled.li`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 );
    border-radius: 8px;
    box-shadow: 2px 4px 4px #0000009F;
    padding: 12px;
    margin-bottom: 8px;
    position: relative;
    cursor: pointer;

`
const ItemData = styled.span`
    color: #D0D0D0;
`
const ItemLembrete=styled.h3`
    margin-bottom: 8px;
    word-break: break-all;

`
export default function Item (props: {lembrete: string, data: string}){
    return(
        <ItemLista>
            <ItemData>{props.data}</ItemData>
            <ItemLembrete>{props.lembrete}</ItemLembrete>
        </ItemLista>
    )
}
