// https://www.acmicpc.net/problem/1159
{
  const input = [
    '18',
    'babic',
    'keksic',
    'boric',
    'bukic',
    'sarmic',
    'balic',
    'kruzic',
    'hrenovkic',
    'beslic',
    'boksic',
    'krafnic',
    'pecivic',
    'klavirkovic',
    'kukumaric',
    'sunkic',
    'kolacic',
    'kovacic',
    'prijestolonasljednikovi'
  ]

  const solve = (input: string[]) => {
    const n = Number(input.shift())
    const player = input
    const names = Array(26).fill(0)
    for (let i = 0; i < player.length; i++) {
      names[player[i].charCodeAt(0) - 97]++
    }

    let fir = ''
    for (let i = 0; i < names.length; i++) {
      if (names[i] >= 5) {
        fir += String.fromCharCode(i + 97)
      }
    }
    console.log(fir)
  }
  solve(input)
}
