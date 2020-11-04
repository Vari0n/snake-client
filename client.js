const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  //interpret incoming data as text
  conn.setEncoding('utf8');

  // process.stdin.on('data', (key) => {
  //   process.stdout.listen('data');
  //   console.log('data');
  // })
  conn.on('data', (data) =>{
    console.log(data);
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });
  //sending data via TCP (giving name to Snake. MAX: 3 letters)
  conn.on('connect', () => {
    conn.write('Name: KEN')
  })

  return conn;
}

module.exports = {
  connect
};