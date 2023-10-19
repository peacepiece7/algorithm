// https://www.acmicpc.net/problem/9996
{
  const input = ['3', 'a*d', 'abcd', 'anestonestod', 'facebook']
  const input2 = ['6', 'h*n', 'hhuhovdjestvarnomozedocisvastann', 'honijezakon', 'atila', 'je', 'bio', 'hun']

  function solve(input: string[]) {
    const n = Number(input.shift())
    const con = input.shift() as string
    for (let i = 0; i < n; i++) {
      const text = input.shift() as string
      const lt = con.split('*')[0] as string
      const rt = con.split('*')[1] as string

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
  solve(input2)
}
