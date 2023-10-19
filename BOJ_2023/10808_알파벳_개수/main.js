// https://www.acmicpc.net/problem/10808

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', (line) => {
  solve(line)
  process.exit()
}).on('close', () => {
  process.exit()
})

function solve(input) {
  const answer = new Array(26).fill(0)
  for (let i = 0; i < input.length; i++) {
    answer[input.charCodeAt(i) - 'a'.charCodeAt(0)]++
  }
  console.log(answer.join(' '))
}
