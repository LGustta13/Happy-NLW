// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando o express
const server = express()

// Utilizar body do require
server.use(express.urlencoded({extended: true}))

// utilizando os arquivos estáticos e pegar os diretórios necessários
server.use(express.static('public'))

// Configurar template engine
server.set('views', path.join(__dirname, "views"))
server.set('view engine', 'hbs')

// criar uma rota
server.get('/', pages.index)
server.get('/orphanages', pages.orphanages)
server.get('/orphanage', pages.orphanage)
server.get('/create-orphanage', pages.createOrphanage)
server.post('/save-orphanage', pages.saveOrphanage)     // rota mais diferenciada para somente salvar os dados de POST

// ligando o servidor
server.listen(5500)