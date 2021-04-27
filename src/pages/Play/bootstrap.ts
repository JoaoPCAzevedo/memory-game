/**
 * TIECs
 */
export interface Tile {
  id: number;
  label: string;
  isFlipped: boolean;
}

/**
 * Config
 */
export const STARTER_POINTS = 1000;
export const PENALTY = 10;

const symbolsSmall: string[] = ['A', 'B', 'C'];

/* const symbolsBig: string[] = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
]; */

const symbols = symbolsSmall;

/**
 * Actions
 */
export const buildGame = (): Tile[] => {
  const size: number = symbols.length * 2;
  const symbolsPairs: string[] = [...symbols, ...symbols];
  const tiles: Tile[] = [];

  for (let index = 0; index < size; index += 1) {
    const randomSymbol = Math.floor(
      Math.random() * (symbolsPairs.length - 0) + 0
    );

    tiles[index] = {
      id: index,
      label: symbolsPairs[randomSymbol],
      isFlipped: false,
    };

    symbolsPairs.splice(randomSymbol, 1);
  }

  return tiles;
};
