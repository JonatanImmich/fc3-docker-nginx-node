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

const sql = `INSERT INTO pessoa (name) VALUES ('${faker.person.firstName() +' '+ faker.person.lastName()}')`;
connection.query(sql);
connection.end;

app.get('/', (req, res) => {

    connection.query(`SELECT name FROM pessoa`, (error, results, fields) => {
      res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ol>
          ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
        </ol>
      `)
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})