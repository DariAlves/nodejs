const mongoose = require('mongoose');

// Definindo uma model
const Artigo = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        conteudo: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

// Exportando o model
// model () - args:
// 1 . nome do model
// 2 . collection
mongoose.model('artigo', Artigo);