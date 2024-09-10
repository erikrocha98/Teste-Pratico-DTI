import './App.css';
import Form from './Components/Form';
import { useState } from 'react';
import { Lembrete } from './types/lembretes';

function App() {
  const [lembrete, setLembretes] =useState<Lembrete[]| []>([])
  return (
    <div className="App">
      <Form setLembretes= {setLembretes}/>
    </div>
  );
}

export default App;
