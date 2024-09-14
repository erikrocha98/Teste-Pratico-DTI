using BackEnd_Reminders.Modelos;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd_Reminders.Banco
{
    public class LembreteDAL()
    {
        
        public IEnumerable<Lembretes> Listar()
        {

            using var context = new RemindersContext();
            return context.Lembretes.ToList();
        }
        public void Adicionar (Lembretes lembrete)
        {
            using var context = new RemindersContext();
            context.Lembretes.Add(lembrete);
            context.SaveChanges();
        }
        public void Atualizar (Lembretes lembrete)
        {
            using var context = new RemindersContext();
            context.Update(lembrete);
            context.SaveChanges();
        }
        public void Deletar(Lembretes lembrete)
        {
            using var context=new RemindersContext();
            context.Remove(lembrete);
            context.SaveChanges();
        }
        public Lembretes? RecuperarPor(Func<Lembretes, bool> condicao)
        {
            using var context = new RemindersContext();
            return context.Lembretes.FirstOrDefault(condicao);
        }

    }
}
