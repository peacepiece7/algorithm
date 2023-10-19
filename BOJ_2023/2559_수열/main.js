// https://www.acmicpc.net/problem/2559
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
    const [n, m] = input.shift().split(' ').map(Number)
    const days = input.shift().split(' ').map(Number)
    const psum = []
    for (let i = 0; i < n; i++) {
      psum[i] = (psum[i - 1] ?? 0) + days[i]
    }
    let max = Number.MIN_SAFE_INTEGER
    for (let i = m - 1; i < n; i++) {
      const num = psum[i] - (psum[i - m] ?? 0)
      max = Math.max(num, max)
    }
    console.log(max)
  }
}
