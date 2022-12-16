# Users API

API feita em um vídeo postado no meu canal no YouTube. Para acessá-lo, [clique aqui](https://youtu.be/gU3kp7Aw0JI).

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- MongoDB

## Conceitos utilizados

- SOLID
- Injeção de Dependência (Dependency Injection)
- Repository Pattern

## Entidades

<pre>
User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}</pre>

## Rotas

- GET /users - retorna os usuários salvos no banco
- POST /users - cria um usuário
- PATCH /users/:id - atualiza um usuário
- DELETE /users/:id - deleta um usuário

## Arquitetura

![Arquitetura](https://imgur.com/k5mXFoZ.png)
