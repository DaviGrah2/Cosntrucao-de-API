const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Array de filmes
let filmes = [
  { id: 1, titulo: 'O Senhor dos Anéis', genero: 'Fantasia' },
  { id: 2, titulo: 'Matrix', genero: 'Ficção Científica' },
  { id: 3, titulo: 'Titanic', genero: 'Romance' }
];

// Array de clientes
let clientes = [];

// Atividade 01: GET /filmes
app.get('/filmes', (req, res) => {
  res.json(filmes);
});

// Atividade 02: GET /filmes/genero
app.get('/filmes/genero', (req, res) => {
  const nome = req.query.nome;
  if (!nome) {
    return res.status(400).json({ error: 'Parâmetro nome é obrigatório' });
  }
  const filmesFiltrados = filmes.filter(f => f.genero.toLowerCase() === nome.toLowerCase());
  res.json(filmesFiltrados);
});

// Atividade 03 e 04: POST /clientes
app.post('/clientes', (req, res) => {
  const { nome, email } = req.body;
  if (!nome || !email) {
    return res.status(400).json({ error: 'Nome e email são obrigatórios' });
  }
  // Verificar duplicidade
  const clienteExistente = clientes.find(c => c.email === email);
  if (clienteExistente) {
    return res.status(400).json({ error: 'Este email já está cadastrado' });
  }
  // Gerar ID automático
  const id = clientes.length > 0 ? Math.max(...clientes.map(c => c.id)) + 1 : 1;
  const novoCliente = { id, nome, email };
  clientes.push(novoCliente);
  res.status(201).json(novoCliente);
});

// Atividade 05: GET /clientes/:id
app.get('/clientes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const cliente = clientes.find(c => c.id === id);
  if (!cliente) {
    return res.status(404).json({ error: 'Cliente não encontrado' });
  }
  res.json(cliente);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});