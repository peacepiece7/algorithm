// https://www.acmicpc.net/problem/2309

{
  const input = [20, 7, 23, 19, 10, 15, 25, 8, 13]
  const solve = (input: number[]) => {
    const answer: number[] = []
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
    console.log(answer.join(' '))
  }
  solve(input)
}
