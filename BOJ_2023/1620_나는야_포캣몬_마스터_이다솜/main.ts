// https://www.acmicpc.net/problem/1620

{
  const input = [
    '26 5',
    'Bulbasaur',
    'Ivysaur',
    'Venusaur',
    'Charmander',
    'Charmeleon',
    'Charizard',
    'Squirtle',
    'Wartortle',
    'Blastoise',
    'Caterpie',
    'Metapod',
    'Butterfree',
    'Weedle',
    'Kakuna',
    'Beedrill',
    'Pidgey',
    'Pidgeotto',
    'Pidgeot',
    'Rattata',
    'Raticate',
    'Spearow',
    'Fearow',
    'Ekans',
    'Arbok',
    'Pikachu',
    'Raichu',
    '25',
    'Raichu',
    '3',
    'Pidgey',
    'Kakuna'
  ]

  function solve(input: string[]) {
    const nMap = new Map()
    const iMap = new Map()
    const [n, m] = input.shift()?.split(' ').map(Number)!
    for (let i = 0; i < n; i++) {
      const key: string = input[i]
      nMap.set(key, i + 1)
      iMap.set(i + 1, key)
    }

    for (let i = n; i < n + m; i++) {
      const q: string | number = input[i]
      if (isNaN(parseInt(q))) {
        console.log(nMap.get(q))
      } else {
        console.log(iMap.get(parseInt(q)))
      }
    }
  }
  solve(input)
}
