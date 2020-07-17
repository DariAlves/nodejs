const express = require('express');
const mongoose = require('mongoose');

// Incluindo o model
require('./models/Artigo');
const Artigo = mongoose.model('artigo');

const app = express();

app.use(express.json())

// Conectando com o DB com mongoose
// Ao executar, o banco tutorial-api será criado automaticamente
mongoose.connect('mongodb://localhost/tutorial-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    .then(() => {
        console.log('Conexão com MongoDB realizada com sucesso!')
    })
    .catch((err) => {
        console.log('Erro: Conexão com MongoDB não foi realizada com sucesso!')
});

// Listar
app.get('/', (req, res) => {
    // Buscar no DB
    Artigo.find(({}))
        // Em caso de sucesso, retorno os dados solicitados
        .then((artigo) => {
            return res.json(artigo);
        })
        // Em caso de erro, mensagem de erro
        .catch((erro) => {
            return res.status(400).json({
                error: true,
                message: "Nenhum artigo encontrado!"
            })
        })
});

// Visualizar
app.get('/artigo/:id', (req, res) => {
    // Buscar no DB
    Artigo.findOne({_id:req.params.id})
        // Em caso de sucesso
        .then((artigo) => {
            return res.json(artigo)
        })
        // Em caso de erro
        .catch((erro) => {
            return res.status(400).json({
                error: true,
                message: "Nenhum artigo encontrado!"
            })
        })
})

// Criar
// req.body - recebendo os dados
app.post('/artigo', (req, res) => {
    // Salvar no DB
    const artigo = Artigo.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Artigo não foi cadastrado com sucesso!"
        })

        return res.status(200).json({
            error: false,
            message: "Artigo cadastrado com sucesso!"
        })
    })
});

// Editar
app.put('/artigo/:id', (req, res) => {
    const artigo = Artigo.updateOne({ _id: req.params.id }, req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: artigo não foi editado com sucesso!"
        });

        return res.json({
            error: false,
            message: "Artigo editado com sucesso!"
        })
    })
})

// Deletar
app.delete('/artigo/:id', (req, res) => {
    const artigo = Artigo.deleteOne({ _id: req.params.id }, req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: artigo não foi apagado com sucesso!"
        });

        return res.json({
            error: false,
            message: "Artigo apagado com sucesso!"
        })
    })
})

app.listen(3000, () => {
    console.log(`Servidor iniciado na porta 3000`)
});