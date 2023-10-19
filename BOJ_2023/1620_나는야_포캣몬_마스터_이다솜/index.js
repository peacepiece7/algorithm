// https://www.acmicpc.net/problem/1620

{
  const readline = require('readline')
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  let input = []

  rl.on('line', (line) => {
    input.push(line)
  }).on('close', () => {
    solve(input)
    process.exit()
  })

  function solve(input) {
    const nMap = new Map()
    const iMap = new Map()
    const [n, m] = input.shift().split(' ').map(Number)
    for (let i = 0; i < n; i++) {
      const key = input[i]
      nMap.set(key, i + 1)
      iMap.set(i + 1, key)
    }

    for (let i = n; i < n + m; i++) {
      const q = input[i]
      if (isNaN(parseInt(q))) {
        console.log(nMap.get(q))
      } else {
        console.log(iMap.get(parseInt(q)))
      }
    }
  }
}
