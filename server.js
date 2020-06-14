const express = require('express');
const Pool = require('pg').Pool;
const cors = require('cors');


const server = express();
server.use(cors());

const pool = new Pool({  
    user: 'vrsgdadecowxux', 
    password: '360ec9205a5963b29a19c89361ee106d8e1014bf990005afc323dd2732ac8153',
    host: 'ec2-34-235-108-68.compute-1.amazonaws.com',
    database: 'dcuc5dvkvvnndn',
    port: '5432',
    ssl: { rejectUnauthorized: false }
})

server.use(express.json());

//SELECT SIMPLES (GET)

server.get('/motos', async function(request, response) {
    const result = await pool.query('SELECT * FROM motos');
    return response.json(result.rows);
})
server.listen(process.env.PORT || 3000);

server.post('/motos', async function(request, response){
    const marca = request.body.marca;
    const modelo = request.body.modelo;
    const anofabri = request.body.anofabri;

    const sql = `
    INSERT INTO motos (marca, modelo, anofabri) VALUES ($1, $2, $3)
    `;

    await pool.query(sql, [marca, modelo, anofabri]);
    return response.status(201).send();
});

server.delete('/motos/:id', async function(req, res){
    const id = req.params.id;

    sql = 'DELETE FROM motos WHERE id = $1';

    await pool.query(sql, [id]);

    res.send();
})

server.put('/motos/:id', async (request, response) => {
    const {id} = request.params;
    const {marca,modelo,anofabri} = request.body;
    const sql = `UPDATE equipes SET marca = $1, modelo = $2, anofabri = $3 WHERE id = $4`;
    await pool.query(sql, [marca,modelo,arena,id]);
    return response.status(204).send();
})