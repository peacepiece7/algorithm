{
  // https://www.acmicpc.net/problem/9375
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
    const c = Number(input.shift())
    for (let i = 0; i < c; i++) {
      const mp = new Map()
      const n = Number(input.shift())
      let sum = 1
      for (let j = 0; j < n; j++) {
        const [_, key] = input.shift().split(' ')
        if (mp.has(key)) mp.set(key, mp.get(key) + 1)
        else mp.set(key, 1)
      }
      for (let [_, value] of mp) {
        sum *= value + 1
      }
      console.log(sum - 1)
    }
  }
}
