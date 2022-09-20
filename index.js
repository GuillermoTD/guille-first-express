import express from 'express';
import http from 'node:http';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Bienvenido a tu primera app en express</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>esta es la pagina de about</h1>');
});

app.listen(PORT);
console.log(`estamos en el puerto ${PORT}`);
