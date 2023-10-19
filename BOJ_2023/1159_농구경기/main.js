// https://www.acmicpc.net/problem/1159

{
  const readline = require('readline')
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const input = []
  rl.on('line', (line) => {
    input.push(line)
  }).on('close', () => {
    solve(input)
    process.exit()
  })

  function solve(input) {
    const n = Number(input.shift())
    const player = input
    const names = Array(27).fill(0)
    for (let i = 0; i < player.length; i++) {
      names[player[i].charCodeAt(0) - 97]++
    }

    let fir = ''
    for (let i = 0; i < names.length; i++) {
      if (names[i] >= 5) {
        fir += String.fromCharCode(i + 97)
      }
    }
    if (fir === '') console.log('PREDAJA')
    else console.log(fir)
  }
}
