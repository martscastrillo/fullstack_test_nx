const express = require('express');


const server = express();


server.use(express.json());

const serverPort = 4000;

server.listen(serverPort, () => {
	console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get('/calc', (req, res) => {
  
  });
  server.get('/history', (req, res) => {
  
  });