// https://www.acmicpc.net/status?user_id=peacepiece&problem_id=9996&from_mine=1
{
  const readline = require('readline')
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const input = []
  function solve(input) {
    const n = Number(input.shift())
    const con = input.shift()
    for (let i = 0; i < n; i++) {
      const text = input.shift()
      const lt = con.split('*')[0]
      const rt = con.split('*')[1]

      if (lt.length + rt.length > text.length) {
        console.log('NE')
        continue
      }

      const sl = text.slice(0, lt.length)
      const sr = text.slice(text.length - rt.length)

      if (lt == sl && rt == sr) {
        console.log('DA')
      } else {
        console.log('NE')
      }
    }
  }

  rl.on('line', (line) => {
    input.push(line)
  }).on('close', () => {
    solve(input)
    process.exit()
  })
}
