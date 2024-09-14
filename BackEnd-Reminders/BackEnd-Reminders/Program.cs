using BackEnd_Reminders.Banco;
using BackEnd_Reminders.Modelos;
using System;
using System.Collections.Generic;

class Program
{
    static void Main()

    {
        var lembreteDAL = new LembreteDAL();
        var novoLembrete = new Lembretes("Terminar backend do projeto prático", DateTime.Parse("13-09-2024")); 
        try
        {
            var connection = new RemindersContext();
            lembreteDAL.Adicionar(novoLembrete);
            var listaLembrete = lembreteDAL.Listar();
            

            foreach (var lembrete in listaLembrete)
            {
                Console.WriteLine(lembrete);
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}