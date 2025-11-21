import api from "./api";

export interface Lembrete {
  id?: number;
  name: string;
  reminderDate: string;
}

export interface CriarLembreteDTO {
  name: string;
  reminderDate: string;
}

const lembretesService = {
  // GET - Listar todos os lembretes
  listar: async (): Promise<Lembrete[]> => {
    const response = await api.get<Lembrete[]>("/Lembretes");
    return response.data;
  },
  // GET - Buscar lembrete por id
  buscarPorId: async (id: number): Promise<Lembrete> => {
    const response = await api.get<Lembrete>(`/Lembretes/${id}`);
    return response.data;
  },
  // POST - Criar um lembrete
  criarLembrete: async(lembrete: CriarLembreteDTO): Promise<Lembrete> =>{
    const response = await api.post<Lembrete>('/Lembretes', lembrete);
    return response.data;
  },
  // PUT - Atualizar um lembrete
  atualizarLembrete: async(id: number, lembrete: Partial<Lembrete>): Promise<Lembrete>=>{
    const response = await api.put<Lembrete>(`/Lembretes/${id}`, lembrete);
    return response.data;
  },
  // DELETE - Deletar um lembrete
  deletarLembrete: async(id: number): Promise<void> => {
    const response = await api.delete<Lembrete>(`/Lembretes/${id}`)
  },
};

export default lembretesService;
