// https://www.acmicpc.net/problem/2559

{
  const input = ['10 2', '3 -2 -4 -9 0 3 7 13 8 -3']
  const input2 = ['10 5', '3 -2 -4 -9 0 3 7 13 8 -3']

  function solve(input: string[]) {
    const [n, m] = input.shift()?.split(' ').map(Number)!
    const days = input.shift()?.split(' ').map(Number)!
    const psum: number[] = []
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
  solve(input2)
}
