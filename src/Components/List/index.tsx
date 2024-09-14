import { Lembrete } from "../../types/lembretes"
import { DeleteButton } from "../DeleteButton/delete"
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
const ItemData = styled.h3`
    color: #D0D0D0;
`

function agruparPorData(lembretes: Lembrete[]): { [data: string]: Lembrete[] } {
  return lembretes.reduce((agrupado, lembrete) => {
    const { data } = lembrete;

    if (!agrupado[data]) {
      agrupado[data] = [];
    }

    agrupado[data].push(lembrete);

    return agrupado;
  }, {} as { [data: string]: Lembrete[] });
}

function Lista({lembretes}:{lembretes: Lembrete[]}){

  
  const lembretesAgrupados = agruparPorData(lembretes);

    
    return (
      <ListaTarefas>
      <Titulo>Lista de Lembretes</Titulo>

      <ListaContainer>
        {Object.keys(lembretesAgrupados).map((data) => (
          <div key={data}>
            <ItemData>{data}</ItemData>
            <ul>
              {lembretesAgrupados[data].map((item, index) => (
                <div style={{ display: 'flex', alignItems:'center', width:'100%'}}>
                  <Item key={index} lembrete={item.lembrete} />
                  <DeleteButton/>
                </div>
                
              ))}
            </ul>
          </div>
        ))}
      </ListaContainer>
    </ListaTarefas>
      )
}

export default Lista
