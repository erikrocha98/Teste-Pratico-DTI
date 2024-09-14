import Form from './Components/Form';
import { useState } from 'react';
import { Lembrete } from './types/lembretes';
import styled from 'styled-components';
import Lista from './Components/List';

const AppStyled= styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    row-gap: 24px;
    min-width: 320px;
    min-height: calc(100vh - 32px);
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #171717;

    
`

const Titulo = styled.h1`
    font-size:32px;
    font-weight:bold;
`

function App() {
  const [lembrete, setLembretes] =useState<Lembrete[]| []>([])
  return (
    <AppStyled>
      <Titulo>Novo Lembrete</Titulo>
      <Form setLembretes= {setLembretes}/>
      <Lista lembretes={lembrete}/>
    </AppStyled>
  );
}

export default App;
