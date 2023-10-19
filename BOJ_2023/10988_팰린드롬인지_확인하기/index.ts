{
  const input = 'baekjoon'

  function solve(input: string) {
    if (input == input.split('').reverse().join('')) console.log(1)
    else console.log(0)
  }

  solve(input)
}
