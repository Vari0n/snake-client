
const setupInput = function() {
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
  return stdin;
}

module.exports = {
  setupInput
}

