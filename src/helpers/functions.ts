export const randomEight = <Type>(array: Type[]): Type[] => {
  const randomIndex = Math.floor(Math.random() * (array.length - 7));
  return [...array].sort(() => Math.random() - 0.5).splice(randomIndex, 8);
};

export const alphabetGenerator = (): string[] => {
  return [...Array(26)].map((_elt, index: number) =>
    String.fromCharCode(index + 97)
  );
};