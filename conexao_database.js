import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQLHOST, // Endereço do servidor MySQL
  user: process.env.MYSQLUSER, // Nome de usuário do MySQL
  password: process.env.MYSQLPASSWORD, // Senha do MySQL
  database: process.env.MYSQLDATABASE, // Nome do banco de dados
  port: process.env.MYSQLPORT
}).promise();

export async function getEnderecos() {
  const results = await pool.query( 'select * from enderecos');

  return results[0];
};

//Estabelece a conexão com o banco de dados
export async function getEnderecoByCep(endereco) {

  const sql = 'select * from enderecos where cep = ?';
  const values = [endereco.cep]


  const result = await pool.query(sql, values, (error, results, fields) => {
    if (error) throw error;

    if (result !== null) {
      console.log(result);
      return true;
    }
    
    return false;
  });

};


//Estabelece a conexão com o banco de dados
export async function salvarCep2(endereco) {

    const sql = 'insert into enderecos (cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi) values (?,?,?,?,?,?,?,?,?,?);';
    const values = [
      endereco.cep,
      endereco.logradouro,
      endereco.complemento,
      endereco.bairro,
      endereco.localidade,
      endereco.uf,
      endereco.ibge,
      endereco.gia,
      endereco.ddd,
      endereco.siafi]


    const result = await pool.query(sql, values, (error, results, fields) => {
      if (error) throw error;

      return result;
    });

  };
