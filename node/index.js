const express = require('express')
const { faker } = require('@faker-js/faker');
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'joni',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
  connection.query(`SELECT name FROM pessoa`, (error, results, fields) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1> 
      <form action="/includeName" method="post">      
        <button type="submit">Adicionar Inscrito</button>
      </form>
      <ol>
        ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
      </ol>
    `)
  })
});

app.post('/includeName', (req, res) => {
  const sql = `INSERT INTO pessoa (name) VALUES ('${faker.person.firstName() +' '+ faker.person.lastName().replace("'","`")}')`;
  connection.query(sql);
  res.redirect('/');
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
});