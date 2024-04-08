const express = require('express');
const app = express();
const path = require('path');

const clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3'];
const productos = ['Producto 1', 'Producto 2', 'Producto 3'];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {
  res.send('Bienvenido a la página principal');
});

app.get('/clientes', (req, res) => {
  res.render('clientes', { clientes: clientes });
});

app.get('/productos', (req, res) => {
  res.render('productos', { productos: productos });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
