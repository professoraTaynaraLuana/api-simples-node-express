const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware para processar JSON
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Bem vindo a nossa primeira rota get sem fluxo pronto');
});

//Iniciando o nosso servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});