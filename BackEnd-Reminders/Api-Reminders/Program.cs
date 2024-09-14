using BackEnd_Reminders.Banco;
using BackEnd_Reminders.Modelos;
using Microsoft.AspNetCore.Mvc;


var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/Lembretes", () =>
{
    var lembreteDAL = new LembreteDAL();
    return Results.Ok(lembrete.Listar());
});

app.MapPost("/Lembretes", ([FromBody] Lembretes lembrete) => {

    var lembreteDAL = new LembreteDAL();
    lembreteDAL.Adicionar(lembrete);
    return Results.Ok();

});

app.MapDelete()


app.Run();
