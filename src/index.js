const express = require("express");

const { mailController } = require("./controller");

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({
    status: true,
    description: "Rota para visualizar a Versão do Sistema (1.0.0)",
  });
});

app.post("/sendMail/:recipient", mailController);

app.listen(PORT, () => {
  console.info(`Servidor rodando na porta ${PORT}`);
});

