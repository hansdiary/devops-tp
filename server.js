const express = require("express");
const { addition } = require("./app");

const app = express();

app.get("/", (req, res) => {
    res.send("Bienvenue dans notre TP DevOps !");
});

app.get("/add", (req, res) => {
    const { a, b } = req.query;
    const result = addition(Number(a), Number(b));
    res.json({ result });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
