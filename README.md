# Gerenciador de Lembretes

Este projeto foi desenvolvido como parte de um teste prático para o processo seletivo da DTI Digital. O objetivo é criar um Gerenciador de Lembretes que permite a criação e exclusão de lembretes por um usuário. Este projeto fullstack utiliza tecnologias como React, C#, ASP.NET Core e SQL Server.


## 💻 Premissas assumidas, Decisão de projeto e Pré-requisitos

Este projeto foi desenvolvido com base nos seguintes pressupostos e decisões:

- Trata-se de um projeto fullstack que envolve o uso de **React** para o frontend, **C#** e **ASP.NET Core** para o backend, e **SQL Server** como banco de dados relacional.
- O **SQL Server** foi escolhido em detrimento do MySQL(SGBD relacional mais popular) devido à sua integração nativa com o .NET e seu desempenho otimizado para este tipo de aplicação.

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente e estável do `<nodeJs>`.
- Você instalou a versão mais recente e estável do `<.NET SDK>`. 
- Você instalou a versão mais recente e estável do `<SQL Server>`.
- Você instalou a versão mais recente e estável do `<Postman>`.
- Você leu `<documentação_relacionada_ao_projeto>`.

## 🚀 Instalando <dependências>

Para instalar as <dependências> do frontend, digite o comando

```
<npm install>
```

## ☕ Usando o Gerenciador de Lembretes

Este projeto utiliza **React e TypeScript** no frontend e **C# com ASP.NET Core** no backend. Devido ao estágio atual do desenvolvimento, o backend ainda não está completamente integrado. A seguir, explico como utilizar o frontend e testar o backend separadamente:


### Frontend (Gerenciamento Local de Lembretes)

As funcionalidades de criar e agrupar lembretes estão implementadas utilizando estados locais no frontend. Para iniciar o frontend:

1. Abra o terminal no diretório `src` da aplicação.
2. Execute o comando:

```bash
npm start

### Backend (Rotas de API com ASP.NET Core)
Embora a integração frontend-backend não esteja concluída, você pode testar as rotas do backend utilizando o Postman:

1. Compile o projeto backend com o seguinte comando: 

```bash
dotnet run

2. Para testar as rotas de lembretes, utilize o Postman para fazer requisições para http://localhost:{porta}/Lembretes, onde {porta} é a porta onde o backend está rodando.

### ⚒️ Melhorias Futuras

- Completar a integração entre o frontend e o backend.
- Dar polimento à API aplicando boas práticas.
- Implementar autenticação de usuário.
- Adicionar testes automatizados para garantir a qualidade do código.
