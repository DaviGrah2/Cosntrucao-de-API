# Catálogo de Filmes e Gerenciamento de Clientes

Esta é uma API simples construída com Node.js e Express para gerenciar um catálogo de filmes e clientes.

## Instalação

1. Instale as dependências:
   ```
   npm install
   ```

2. Inicie o servidor:
   ```
   npm start
   ```

O servidor será executado na porta 3000.

## Rotas

### Filmes

- **GET /filmes**: Retorna a lista completa de filmes.
- **GET /filmes/genero?nome={genero}**: Retorna filmes filtrados por gênero.

### Clientes

- **POST /clientes**: Adiciona um novo cliente. Corpo da requisição: `{ "nome": "Nome", "email": "email@example.com" }`. Retorna o cliente criado com status 201.
- **GET /clientes/:id**: Retorna o cliente com o ID especificado. Retorna 404 se não encontrado.

## Validações

- No cadastro de clientes, verifica se o email já existe. Se sim, retorna status 400 com mensagem de erro.

## Dados Iniciais

O array de filmes é inicializado com 3 filmes de exemplo.