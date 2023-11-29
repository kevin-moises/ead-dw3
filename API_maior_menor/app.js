const express = require('express');
const router = require('./routes/route')

const app = express();
const port = 3001;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});