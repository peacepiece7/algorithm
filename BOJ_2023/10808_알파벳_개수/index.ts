{
  const input = 'beakjoonzz'
  const solve = (input: string) => {
    const answer: number[] = new Array(26).fill(0)
    for (let i = 0; i < input.length; i++) {
      answer[input.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }
    console.log(answer.join(' '))
  }
  solve(input)
}
