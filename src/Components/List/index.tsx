import { Lembrete } from "../../types/lembretes"
import Item from "./Item"

function Lista({lembretes}:{lembretes: Lembrete[]}){
    
    return (
        <aside className='listaTarefas'>
          <h2> Lista de Lembretes </h2>

          <ul>
            {lembretes.map((item, index) => (
              <Item 
                key={index}
                lembrete={item.lembrete}
                data={item.data}
              /> 
            ))}
          </ul>
        </aside>
      )
}

export default Lista
