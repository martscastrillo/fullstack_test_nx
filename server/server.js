const express = require('express');
const cors = require('cors');
const app = express();
const serverPort = 4000;
app.use(cors());

app.use(express.json());

// Iniciar el servidor
app.listen(serverPort, () => {
  console.log(`Servidor backend ejecutándose en el puerto ${serverPort}`);
 
});

const hist = [];

app.post("/calc", (req, res) => {
/*   const respuesta = {
    mensaje: '¡Hola desde el servidor backend!'
  }; */
  console.log(JSON.stringify(req.body) + '++++req');
  /* const array = JSON.parse(req.body);
  const result = 0;
  console.log(req.body + '++++req.body');
  array.forEach((element) => {
    result += element;
});
console.log(result); */
res.json(result);
  
});


