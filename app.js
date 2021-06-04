const express = require('express');
const app = express();
const path = require('path');
const views = path.join(__dirname, 'views');
const port = 3030;

//se definen los archivos publicos estaticos
app.use(express.static('public'));


//creacion de rutas
//home
app.get('/', (req,res) => res.sendFile(path.join(views,'index.html')));

//saitama
app.get('/saitama', (req,res) => res.sendFile(path.join(views, 'saitama.html')));

//king
app.get('/king', (req,res) => res.sendFile(path.join(views, 'king.html')));

//fubuki
app.get('/fubuki', (req,res) => res.sendFile(path.join(views, 'fubuki.html')));

//tatsumaki
app.get('/tatsumaki', (req,res) => res.sendFile(path.join(views, 'tatsumaki.html')));

//genos
app.get('/genos', (req, res) => res.sendFile(path.join(views, 'genos.html')));

//garou
app.get('/garou', (req,res) => res.sendFile(path.join(views, 'garou.html')));

//bang
app.get('/bang', (req,res) => res.sendFile(path.join(views,'bang.html')));

//configuracion del servidor
app.listen(port, () => console.log(`Servidor corriendo en http//:localhost:${port}`))
