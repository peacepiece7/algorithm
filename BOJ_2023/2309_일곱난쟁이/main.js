// https://www.acmicpc.net/problem/2309

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []

rl.on('line', (line) => {
  input.push(parseInt(line))
}).on('close', () => {
  solve(input)
  process.exit()
})

function solve(input) {
  const answer = []
  const total = input.reduce((p, c) => p + c)
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < i; j++) {
      const sum = total - input[i] - input[j]
      if (sum !== 100) continue
      for (let k = 0; k < input.length; k++) {
        if (k == i || k == j) continue
        answer.push(input[k])
      }
    }
    if (answer.length !== 0) break
  }
  console.log(answer.sort((a, b) => a - b).join(' '))
}
