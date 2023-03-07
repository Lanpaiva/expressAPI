// Importa as dependências
const express = require('express');
const bodyParser = require('body-parser');

// Cria uma instância do servidor
const app = express();

// Adiciona o middleware para fazer o parsing do corpo das requisições
app.use(bodyParser.json());

// Rotas GET
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// Rotas PUT
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body;

    res.json({ id, ...user });
});

// Rotas DELETE
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    // Deleta o usuário com o id especificado
    res.json({ message: `User ${id} deleted.` });
});

// Rotas PATCH
app.patch('/users/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    // Faz as atualizações parciais do usuário com o id especificado
    // e retorna o usuário atualizado
    res.json({ id, ...updates });
});

// Inicia o servidor na porta especificada
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});
