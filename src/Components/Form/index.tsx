import { useState } from "react"
import { Lembrete } from "../../types/lembretes";
import Button from "../Button";
import styled from "styled-components";

const NovoLembrete= styled.form`
    display:flex;
    flex-direction: column;
    grid-area: nova-tarefa;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 );
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    padding: 12px;

`

const InputContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;

`

const LabelEstilizado=styled.label`
    margin-bottom: 8px;
    font-size: 1.25rem;

`
const Input= styled.input`
    width: 100%;
    padding: 8px 12px 4px;
    box-sizing: border-box;
    border: unset;
    border-radius: 5px;
    background-color: #5D677C;
    box-shadow: 0px 2px 4px #2D2B2B9F inset;

    ::placeholder {
      color: #BFBFBF;
    }


`

interface FormProps {
  setLembretes: React.Dispatch<React.SetStateAction<Lembrete[]>>;
}

function Form ({setLembretes}: FormProps) {

    const[lembrete, setLembrete]= useState('')
    const[data, setData] = useState('dd/mm/aaaa')

    function adicionarLembrete(event: React.FormEvent<HTMLFormElement>){
      event.preventDefault();
      const novoLembrete: Lembrete={
        lembrete,
        data,
      };
      setLembretes(lembretesAntigos=>[...lembretesAntigos, novoLembrete])
      setLembrete('')
      setData('dd/mm/aaaa')
      
    }

    return (
        
        <NovoLembrete onSubmit={adicionarLembrete}>
          <InputContainer>
            
            <LabelEstilizado htmlFor="lembrete">
              Nome
            </LabelEstilizado>
            <Input
              type="text"
              name="lembrete"
              id="lembrete"
              value={lembrete}
              onChange={evento=>{setLembrete(evento.target.value)}}
              placeholder="Nome do Lembrete"
              required
            />
          </InputContainer>
          <InputContainer>
            <LabelEstilizado htmlFor="data">
              Data
            </LabelEstilizado>
            <Input
              type="date"
              step="1"
              name="data"
              value= {data}
              onChange={evento => {setData(evento.target.value)}}
              id="data"
              required
            />
          </InputContainer>
          <Button 
            texto= 'Criar'
            type='submit'

          />
        </NovoLembrete>
      )
}
export default Form

