import { Lembrete } from "../../types/lembretes"
import Item from "./Item"
import styled from "styled-components"

const Titulo= styled.h1`
    font-size:32px
`

function Lista({lembretes}:{lembretes: Lembrete[]}){
    
    return (
        <aside>
          <Titulo> Lista de Lembretes </Titulo>

          <ul>
            {lembretes.map((item, index) => (
              <Item 
                key={index}
                data={item.data}
                lembrete={item.lembrete}
              /> 
            ))}
          </ul>
        </aside>
      )
}

export default Lista
