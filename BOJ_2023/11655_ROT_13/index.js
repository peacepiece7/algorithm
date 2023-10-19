{
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
    let result = ''
    input.split('').forEach((val) => {
      let ascii = val.charCodeAt(0)
      if (ascii >= 97 && ascii <= 122) {
        if (ascii + 13 > 122) {
          result += String.fromCharCode(ascii + 13 - 122 + 96)
        } else {
          result += String.fromCharCode(ascii + 13)
        }
      } else if (ascii >= 65 && ascii <= 90) {
        if (ascii + 13 > 90) {
          result += String.fromCharCode(ascii + 13 - 90 + 64)
        } else {
          result += String.fromCharCode(ascii + 13)
        }
      } else {
        result += val
      }
    })
    console.log(result)
  }
}
