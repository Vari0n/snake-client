let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //console.log('after resume');
  stdin.on('data', (key) => {
    //console.log('lock the key' + key);
    if (key === '\u0003') {
      process.exit()
    }
  })
  stdin.on('data', (key) => {
    if (key === 'w'){
      conn.write('Move: up');
    }
    if (key === 'a') {
      conn.write('Move: left');
    }
    if (key === 's') {
      conn.write('Move: down');
    }
    if (key === 'd') {
      conn.write('Move: right');
    }
    if (key === 'g') {
      conn.write('Say: GG');
    }
    
    if (key === 'l') {
      conn.write('Say: Lol') 
    }

  })
  return stdin;
}

module.exports = {
  setupInput
}

