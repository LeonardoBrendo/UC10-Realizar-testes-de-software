require('dotenv').config();
const express = require('express');
const { query, ensureSchema } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const router = express.Router();

router.post('/usuarios', async (req, res) => {
  try {
    const { nome, salario, idade } = req.body;
    if (!nome || salario == null || idade == null) {
      return res.status(400).json({ error: 'nome, salario e idade são obrigatórios' });
    }
    const result = await query(
      'INSERT INTO usuarios (nome, salario, idade) VALUES ($1, $2, $3) RETURNING *',
      [nome, salario, idade]
    );
    res.status(201).json(result.rows[0]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

router.get('/usuarios', async (_req, res) => {
  try {
    const result = await query('SELECT * FROM usuarios ORDER BY id');
    res.json(result.rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Erro ao listar usuários' });
  }
});

router.get('/usuarios/:id', async (req, res) => {
  try {
    const result = await query('SELECT * FROM usuarios WHERE id = $1', [req.params.id]);
    if (result.rowCount === 0) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(result.rows[0]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
});

router.put('/usuarios/:id', async (req, res) => {
  try {
    const { nome, salario, idade } = req.body;
    const result = await query(
      'UPDATE usuarios SET nome = $1, salario = $2, idade = $3 WHERE id = $4 RETURNING *',
      [nome, salario, idade, req.params.id]
    );
    if (result.rowCount === 0) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(result.rows[0]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
});

router.delete('/usuarios/:id', async (req, res) => {
  try {
    const result = await query('DELETE FROM usuarios WHERE id = $1', [req.params.id]);
    if (result.rowCount === 0) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.status(204).send();
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Erro ao excluir usuário' });
  }
});

app.use('/api', router);

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, async () => {
  await ensureSchema();
  console.log(`API rodando na porta ${PORT}`);
});
