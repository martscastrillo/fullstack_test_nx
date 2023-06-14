const express = require('express');
const app = express();

const cors = require('cors');

server.use(cors());


app.post('/calc', (req, res) => {
  const respuesta = {
    mensaje: '¡Hola desde el servidor backend!'
  };
  res.json(respuesta);
});

// Iniciar el servidor
app.listen(4000, () => {
  console.log('Servidor backend ejecutándose en el puerto 4000');
 
});


