import app from "./app";

const port = process.env.PORT || 30001;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))