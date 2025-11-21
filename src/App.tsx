import Form from './Components/Form';
import { useEffect, useState } from 'react';
import { Lembrete } from './types/lembretes';
import styled from 'styled-components';
import Lista from './Components/List';
import lembretesService from './services/lembreteService';

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

const MensagemErro = styled.p`
    color: #ff6b6b;
    font-size: 14px;
    padding: 12px;
    background-color: rgba(255, 107, 107, 0.1);
    border-radius: 8px;
`;

const MensagemCarregando = styled.p`
    color: #51cf66;
    font-size: 14px;
`;

function App() {
  const [lembretes, setLembretes] =useState<Lembrete[]>([]);
  const[carregando, setCarregando] = useState(true);
  const[erro, setErro] = useState<string>('');

  //Função para buscar todos os lembretes presentes no banco de dados
  const carregarLembretes = async () => {
    try{
      setCarregando(true);
      setErro('');
      const dados = await lembretesService.listarLembretes();
      setLembretes(dados);
    }catch(error: any){
      console.error('Erro ao carregar lembretes:', error);
      setErro('Erro ao carregar lembretes. Verifique se a API está rodando.');
    }finally {
      setCarregando(false);
    }
  };

  //Quando o componente montar busca os lembretes
  useEffect(()=>{
    carregarLembretes();
  },[]);

  //Função para adicionar novo lembrete
  const handleNovoLembrete  = async(novoLembrete: Lembrete) =>{
    setLembretes([...lembretes, novoLembrete]);
  };

  //Função para deletar novo lembrete
  const handleDeletarLembrete = async (id: number) =>{
    try {
      await lembretesService.deletarLembrete(id);
      setLembretes(lembretes.filter(lembrete => lembrete.id != id));
    } catch (error) {
      console.error('Erro ao deletar lembrete:', error);
      setErro('Erro ao deletar lembrete.');
    }
  };
  return (
    <AppStyled>
      <Titulo>Novo Lembrete</Titulo>
      <Form 
        setLembretes= {setLembretes}
        onNovoLembrete={handleNovoLembrete}
      />

      {erro && <MensagemErro>{erro}</MensagemErro>}
      {carregando ? (
        <MensagemCarregando>Carregando lembretes...</MensagemCarregando>
      ) : (
        <Lista 
          lembretes={lembretes} 
          onDeletar={handleDeletarLembrete}
        />
      )}
    </AppStyled>
  );
}

export default App;
