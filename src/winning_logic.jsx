export const Winner = (square) => {
  const arrayOfWinningCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < arrayOfWinningCombinations.length; i++) {
    const [a, b, c] = arrayOfWinningCombinations[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
};
