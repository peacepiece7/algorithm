// https://www.acmicpc.net/problem/2979

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
    solve()
    process.exit()
  })

  function solve() {
    const [a, b, c] = input.shift().split(' ').map(Number)
    const v = input.map((val) => val.split(' ').map(Number))
    const time = Array(100).fill(0)

    for (let i = 0; i < v.length; i++) {
      for (let j = v[i][0]; j < v[i][1]; j++) time[j]++
    }

    console.log(
      time.reduce((acc, cur) => {
        if (cur === 1) return acc + cur * a
        if (cur === 2) return acc + cur * b
        if (cur === 3) return acc + cur * c
        return acc
      })
    )
  }
}
