const express = require('express')
const app = express()

// Middleware para verificar se o usuário está autenticado
const verificaAutenticacao = (req, res, next) => {
    const usuarioAutenticado = true // Aqui você deve implementar a lógica de autenticação
    if (usuarioAutenticado) {
        next() // Próximo middleware ou rota
    } else {
        res.status(401).json({ message: 'Não autorizado' })
    }
}

// Rota privada que requer autenticação
app.get('/rota-privada', verificaAutenticacao, (req, res) => {
    res.json({ message: 'Esta é uma rota privada!' })
})

// Inicia o servidor na porta 3000
const port = 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
