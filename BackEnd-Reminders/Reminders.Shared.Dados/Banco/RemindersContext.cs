using BackEnd_Reminders.Modelos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd_Reminders.Banco
{
    public class RemindersContext : DbContext
    {

        public DbSet<Lembretes> Lembretes { get; set; }

        private string connectionString = "Data Source=BOOK-U3BJ604UQ1;Initial Catalog=RemindersDataBase;Integrated Security=True;Connect Timeout=30;Encrypt=True;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False"
;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectionString);
        }

    }
}