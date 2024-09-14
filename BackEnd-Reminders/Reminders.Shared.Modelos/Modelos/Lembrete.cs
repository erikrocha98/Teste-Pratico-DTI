namespace BackEnd_Reminders.Modelos
{

    public class Lembretes
    {
        private List<Lembretes> lembretes = new List<Lembretes>();

        public Lembretes(string nome, DateTime data)
        {
            Nome = nome;
            Data = data;

        }

        public string Nome { get; set; }
        public DateTime Data { get; set; }
        public int Id { get; set; }

        public override string ToString()
        {
            return $"ID: {Id}, Nome: {Nome}, Data: {Data.ToShortDateString()}";
        }

    }
}
