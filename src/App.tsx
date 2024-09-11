import Form from './Components/Form';
import { useState } from 'react';
import { Lembrete } from './types/lembretes';
import styled from 'styled-components';

const AppStyled= styled.div`
    display: grid;
    grid-template-rows: min-content min-content auto;
    grid-template-areas: 
    "nova-tarefa"
    "cronometro"
    "tarefas"
    ;
    row-gap: 24px;
    min-width: 320px;
    min-height: calc(100vh - 32px);
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #171717;

    
`

function App() {
  const [lembrete, setLembretes] =useState<Lembrete[]| []>([])
  return (
    <AppStyled>
      <Form setLembretes= {setLembretes}/>
    </AppStyled>
  );
}

export default App;
