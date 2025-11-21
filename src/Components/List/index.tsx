import { Lembrete } from "../../types/lembretes"
import Item from "./Item"
import styled from "styled-components"

const Titulo = styled.h1`
    font-size:24px;
    margin-bottom: 12px;
`

const ListaTarefas = styled.aside`
    grid-area: tarefas;
    height: 100%;
`

const ListaContainer = styled.ul`
    max-height: 350px;
    overflow-y: auto;
`

const ItemData = styled.h3`
    color: #D0D0D0;
    margin-top: 16px;
    margin-bottom: 8px;
`

const MensagemVazia = styled.p`
    color: #BFBFBF;
    text-align: center;
    padding: 20px;
    font-style: italic;
`

interface ListaProps {
  lembretes: Lembrete[];
  onDeletar?: (id: number) => void;
}

function agruparPorData(lembretes: Lembrete[]): { [data: string]: Lembrete[] } {
  return lembretes.reduce((agrupado, lembrete) => {
    // Converte reminderDate (string ISO) para Date
    const dataFormatada = new Date(lembrete.reminderDate);
    
    // Formatar a data para 'dd/mm/yyyy'
    const dataString = `${dataFormatada.getDate().toString().padStart(2, '0')}/${(dataFormatada.getMonth() + 1).toString().padStart(2, '0')}/${dataFormatada.getFullYear()}`;
    
    if (!agrupado[dataString]) {
      agrupado[dataString] = [];
    }

    agrupado[dataString].push(lembrete);

    return agrupado;
  }, {} as { [data: string]: Lembrete[] });
}

function Lista({ lembretes, onDeletar }: ListaProps) {

  const lembretesAgrupados = agruparPorData(lembretes);

  // Se não houver lembretes
  if (lembretes.length === 0) {
    return (
      <ListaTarefas>
        <Titulo>Lista de Lembretes</Titulo>
        <MensagemVazia>Nenhum lembrete cadastrado ainda.</MensagemVazia>
      </ListaTarefas>
    );
  }

  return (
    <ListaTarefas>
      <Titulo>Lista de Lembretes</Titulo>

      <ListaContainer>
        {Object.keys(lembretesAgrupados)
          .sort((a, b) => {
            // Ordena as datas (mais recentes primeiro)
            const [diaA, mesA, anoA] = a.split('/').map(Number);
            const [diaB, mesB, anoB] = b.split('/').map(Number);
            const dataA = new Date(anoA, mesA - 1, diaA);
            const dataB = new Date(anoB, mesB - 1, diaB);
            return dataA.getTime() - dataB.getTime();
          })
          .map((data) => (
            <div key={data}>
              <ItemData>{data}</ItemData>
              <ul>
                {lembretesAgrupados[data].map((lembrete) => (
                  <Item 
                    key={lembrete.id} 
                    lembrete={lembrete}
                    onDeletar={onDeletar}
                  />
                ))}
              </ul>
            </div>
          ))}
      </ListaContainer>
    </ListaTarefas>
  )
}

export default Lista