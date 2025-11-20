import { useEffect, useState } from "react"
import { Lembrete } from "../../types/lembretes";
import Button from "../Button";
import styled from "styled-components";
import axios from "axios";

const NovoLembrete= styled.form`
    display:flex;
    flex-direction: column;
    grid-area: nova-tarefa;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 );
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    padding: 12px;
    width: 50%;

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

    &::placeholder {
      color: #BFBFBF;
    }


`

interface FormProps {
  setLembretes: React.Dispatch<React.SetStateAction<Lembrete[]>>;
}

function Form ({setLembretes}: FormProps) {

    const[lembrete, setLembrete]= useState('');
    const[data, setData] = useState<Date>(new Date());

    /* teste de conexão com a api */
    useEffect(()=>{
      axios.get("http://localhost:5121/Lembretes")
        .then(resposta=>{
          console.log(resposta.data);
        })
        .catch(erro=>{console.log(erro)});
    })

    async function adicionarLembrete(event: React.FormEvent<HTMLFormElement>){
      event.preventDefault();
      const novoLembrete: Lembrete={
        lembrete,
        data,
      };
      try {
        const resposta = await axios.post("http://localhost:5121/Lembretes", novoLembrete);
        console.log("Lembrete Criado: ", resposta.data);

        setLembretes(lembretesAntigos=>[...lembretesAntigos, resposta.data]);
        setLembrete('');
        setData(new Date());
        
      } catch (error) {
        console.error("Erro ao criar lembrete:", error);
        alert("Não foi possível criar o lembrete");
        
      }
    }
    function handleDataChange(event: React.ChangeEvent<HTMLInputElement>) {
      const novaData = new Date(event.target.value); // Convertendo o valor para objeto Date
      setData(novaData);
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
              value={data.toISOString().split("T")[0]} // Converte a data para formato 'yyyy-mm-dd'
              onChange={handleDataChange} 
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

