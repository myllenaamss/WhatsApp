const { Router } = require("express");
const conn = require("../db/connection");
const router = Router();
router.post("/auth", async (req, res) => {
    let isAuth = false;
    const { telefone, senha } = req.query;
    const cmd = "select * from utilizadores where telefone = ? and senha = ?;";
    
    try {
        const query = await conn.query(cmd, [telefone, senha]);
        if (query[0].length > 0) {
            isAuth = true;
        }
        res.json({ isAuth: isAuth });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ isAuth: false, erro: "Erro no servidor" });
    }
});
router.post("/registrar", async (req, res) => {
    
    const { apelido, senha, telefone } = req.body;
    const cmd = "INSERT INTO utilizadores (apelido, senha, telefone) VALUES (?, ?, ?);";
    try {
        await conn.query(cmd, [apelido, senha, telefone]);
        res.status(201).json({ mensagem: "Usuário registrado com sucesso!" });
    } catch (erro) {
        console.error(erro);
        res.status(409).json({ mensagem: "Erro ao registrar ou usuário já existe." });
    }
});
router.post("/chat", async (req, res) => {
    const { telefone, mensagem } = req.body;
    if (!telefone || !mensagem) {
        return res.status(400).json({ mensagem: "Telefone e mensagem são obrigatórios." });
    }
    res.status(200).json({ mensagem: "Mensagem enviada com sucesso!" });
});
module.exports = router;