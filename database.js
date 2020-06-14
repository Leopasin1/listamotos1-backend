const Pool = require('pg').Pool;

///1 - Abrir a conexão
//2 - Executar o comando SQL (query, insert)
//3 - Fechar a conexão

const pool = new Pool({  
    user: 'vrsgdadecowxux', 
    password: '360ec9205a5963b29a19c89361ee106d8e1014bf990005afc323dd2732ac8153',
    host: 'ec2-34-235-108-68.compute-1.amazonaws.com',
    database: 'dcuc5dvkvvnndn',
    port: '5432',
    ssl: { rejectUnauthorized: false }
})

/*const sql = `
    CREATE TABLE IF NOT EXISTS motos
    (
        id serial primary key,
        marca varchar(50) not null,
        modelo varchar(50) not null,
        anofabri int not null
     )
 `;
 pool.query(sql, (error, result) => {
   if(error)
        throw error
    
     console.log('Tabela criada com sucesso!');
});*/

/*const sql_insert = `
         INSERT INTO motos (marca, modelo, anofabri) VALUES ('Honda','cg150', 2012)
`;
 pool.query(sql_insert, function(error, result) {
     if(error)
         throw error;
    console.log(result.rowCount);
 })*/

 const sql_select = 
 `
 SELECT * FROM  motos
 
 `;
 pool.query(sql_select, function(error, result) {
     if(error)
         throw error;
    console.log(result.rows);
    })
    


