import express from 'express';
import cors from 'cors'

import { getEnderecos, getEnderecoByCep, salvarCep2 } from './conexao_database.js';

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const PORT = 3000

app.listen(process.env.PORT || PORT, () => {
  console.log('Servidor iniciado na porta 3000');
})

// Rota para buscar informações de um CEP
app.get('/enderecos', async (req, res) => {
    try {
        const data = await getEnderecos();
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter endereços salvos', error);
        res.status(500).json({ error: 'Erro ao obter endereços salvos' });
    }
});

app.post('/enderecos/salvar', ({ body }, res) => {

    if (Object.keys(body).length === 0) {
        res.status(400).json({ msg: 'Cep não pode ser vazio.' });
        return;
    }

    if (body.cep === null || body.cep === '') {
      res.status(422).json({ msg: 'Cep não pode ser nulo.' });
      return;
    }

    const existsByCep = getEnderecoByCep(body.cep);

    if (existsByCep) {
        res.status(400).json({ msg: 'Já possui um endereço salvo para o mesmo CEP.' });
        return;
    }
  
    const result = salvarCep2({ 
        cep: body.cep, 
        logradouro: body.logradouro, 
        complemento: body.complemento, 
        bairro: body.bairro, 
        localidade: body.localidade, 
        uf: body.uf,
        ibge: body.ibge,
        gia: body.gia,
        ddd: body.ddd,
        siafi: body.siafi });

    if (result !== null) {
        return res.status(201).json({ msg: 'O cep: ' + body.cep + ' foi salvo com sucesso!' });
    }
  })

app.listen(port, () => {
    console.log(`Servidor rodando em porta: ${port}`);
});
