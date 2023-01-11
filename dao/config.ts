import pkg from 'pg';
const { Client } = pkg;


export function createConnection(){
  const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'test',
    password: '123456',
    port: 5432,
  })
  client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  return client;
}

