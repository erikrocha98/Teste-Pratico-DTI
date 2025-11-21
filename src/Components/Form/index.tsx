import { useState } from "react"
import { Lembrete } from "../../types/lembretes";
import Button from "../Button";
import styled from "styled-components";
import lembretesService from "../../services/lembreteService";

const NovoLembrete = styled.form`
    display:flex;
    flex-direction: column;
    grid-area: nova-tarefa;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 );
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    padding: 12px;
    width: 50%;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
`

const LabelEstilizado = styled.label`
    margin-bottom: 8px;
    font-size: 1.25rem;
`

const Input = styled.input`
    width: 100%;
    padding: 8px 12px 4px;
    box-sizing: border-box;
    border: unset;
    border-radius: 5px;
    background-color: #5D677C;
    box-shadow: 0px 2px 4px #2D2B2B9F inset;

    &::placeholder {
      color: #BFBFBF;
    }
`

const MensagemSucesso = styled.p`
    color: #51cf66;
    font-size: 14px;
    margin-top: 8px;
    text-align: center;
`

const MensagemErro = styled.p`
    color: #ff6b6b;
    font-size: 14px;
    margin-top: 8px;
    text-align: center;
`

interface FormProps {
  setLembretes: React.Dispatch<React.SetStateAction<Lembrete[]>>;
  onNovoLembrete?: (lembrete: Lembrete) => void;
}

function Form({ setLembretes, onNovoLembrete }: FormProps) {

    const [name, setName] = useState('');
    const [reminderDate, setReminderDate] = useState('');
    const [enviando, setEnviando] = useState(false);
    const [mensagem, setMensagem] = useState<{ tipo: 'sucesso' | 'erro', texto: string } | null>(null);

    async function adicionarLembrete(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      
      // Limpa mensagens anteriores
      setMensagem(null);
      setEnviando(true);

      try {
        // Converte a data para o formato ISO que a API espera
        const dataFormatada = new Date(reminderDate).toISOString();
        
        // Cria o objeto no formato correto da API
        const novoLembrete = {
          name: name,
          reminderDate: dataFormatada
        };

        // Envia para a API usando o service
        const lembreteCreated = await lembretesService.criarLembrete(novoLembrete);
        
        console.log("Lembrete criado com sucesso:", lembreteCreated);

        // Atualiza a lista de lembretes
        setLembretes(lembretesAntigos => [...lembretesAntigos, lembreteCreated]);
        
        // Chama callback se existir
        if (onNovoLembrete) {
          onNovoLembrete(lembreteCreated);
        }

        // Limpa o formulário
        setName('');
        setReminderDate('');
        
        // Mostra mensagem de sucesso
        setMensagem({ tipo: 'sucesso', texto: 'Lembrete criado com sucesso! ✓' });
        
        // Remove a mensagem após 3 segundos
        setTimeout(() => setMensagem(null), 3000);

      } catch (error: any) {
        console.error("Erro ao criar lembrete:", error);
        
        // Mostra mensagem de erro mais específica
        const mensagemErro = error.response?.data?.message || 
                            error.message || 
                            "Não foi possível criar o lembrete. Verifique se a API está rodando.";
        
        setMensagem({ tipo: 'erro', texto: mensagemErro });
      } finally {
        setEnviando(false);
      }
    }

    return (
        <NovoLembrete onSubmit={adicionarLembrete}>
          <InputContainer>
            <LabelEstilizado htmlFor="name">
              Nome
            </LabelEstilizado>
            <Input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={evento => setName(evento.target.value)}
              placeholder="Nome do Lembrete"
              required
              disabled={enviando}
            />
          </InputContainer>

          <InputContainer>
            <LabelEstilizado htmlFor="reminderDate">
              Data
            </LabelEstilizado>
            <Input
              type="date"
              name="reminderDate"
              id="reminderDate"
              value={reminderDate}
              onChange={evento => setReminderDate(evento.target.value)}
              required
              disabled={enviando}
            />
          </InputContainer>

          <Button 
            texto={enviando ? 'Criando...' : 'Criar'}
            type='submit'
          />

          {mensagem && (
            mensagem.tipo === 'sucesso' 
              ? <MensagemSucesso>{mensagem.texto}</MensagemSucesso>
              : <MensagemErro>{mensagem.texto}</MensagemErro>
          )}
        </NovoLembrete>
    )
}

export default Form




































