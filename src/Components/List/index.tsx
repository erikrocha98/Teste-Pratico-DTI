import { Lembrete } from "../../types/lembretes"
import Item from "./Item"
import styled from "styled-components"

const Titulo= styled.h1`
    font-size:32px;
    margin-bottom: 12px;
`

const ListaTarefas=styled.aside`
    grid-area: tarefas;
    height: 100%;

`
const ListaContainer=styled.ul`
      max-height: 350px;
      overflow-y: scroll;
      scrollbar-width: thin;

`

function Lista({lembretes}:{lembretes: Lembrete[]}){
    
    return (
        <ListaTarefas>
          <Titulo> Lista de Lembretes </Titulo>

          <ListaContainer>
            {lembretes.map((item, index) => (
              <Item 
                key={index}
                data={item.data}
                lembrete={item.lembrete}
              /> 
            ))}
          </ListaContainer>
        </ListaTarefas>
      )
}

export default Lista
