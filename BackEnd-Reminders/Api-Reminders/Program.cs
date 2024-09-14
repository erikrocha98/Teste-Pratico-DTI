using BackEnd_Reminders.Banco;
using BackEnd_Reminders.Modelos;
using Microsoft.AspNetCore.Mvc;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<RemindersContext>();
builder.Services.AddTransient<LembreteDAL>();
var app = builder.Build();

app.MapGet("/Lembretes", () =>
{
    var lembreteDAL = new LembreteDAL();
    return Results.Ok(lembreteDAL.Listar());
});

app.MapPost("/Lembretes", ([FromBody] Lembretes lembrete) => {

    var lembreteDAL = new LembreteDAL();
    lembreteDAL.Adicionar(lembrete);
    return Results.Ok();

});

app.MapDelete("/Lembretes/{id}", ([FromServices] LembreteDAL lembreteDAL, int id) => {
    var lembrete = lembreteDAL.RecuperarPor(a => a.Id == id);
    if (lembrete is null)
    {
        return Results.NotFound();
    }
    lembreteDAL.Deletar(lembrete);
    return Results.NoContent();

});


app.Run();
