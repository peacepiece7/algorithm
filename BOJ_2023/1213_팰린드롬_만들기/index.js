{
  const readline = require('readline')
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.on('line', (line) => {
    solve(line)
  }).on('close', () => {
    process.exit()
  })

  function solve(input) {
    const list = Array(26).fill(0)
    const arr = input.split('')
    // 알바벳 카운트
    for (let i = 0; i < arr.length; i++) {
      list[arr[i].charCodeAt(0) - 65]++
    }
    let midIdx = null
    // 알파벳 카운트가 홀수일 경우 처리
    for (let i = 0; i < list.length; i++) {
      if (list[i] % 2 !== 0) {
        if (typeof midIdx === 'number') {
          console.log("I'm Sorry Hansoo")
          process.exit()
        }
        midIdx = i
      }
    }

    let answer = ''
    // 카운트 절반 나눠서 정답에 추가
    for (let i = 0; i < list.length; i++) {
      if (list[i] === 0) continue
      const char = String.fromCharCode(i + 65)
      if (midIdx === i) {
        if (list[i] === 1) continue
        // 홀수 카운트가 1이 아닐 경우 절반 정답에 추가
        for (let j = 0; j < Math.floor(list[i] / 2); j++) answer += char
      } else {
        // 짝수 카운트의 절반 정답에 추가
        for (let j = 0; j < list[i] / 2; j++) answer += char
      }
    }

    // 반대편 팰린드롬 정답 채우기
    const sufix = answer.split('').reverse().join('')
    if (typeof midIdx === 'number') answer += String.fromCharCode(midIdx + 65)
    answer += sufix

    console.log(answer)
  }
}
