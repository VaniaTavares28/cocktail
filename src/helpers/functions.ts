export const randomEight = <Type>(array: Type[]): Type[] => {
  const randomIndex = Math.floor(Math.random() * (array.length - 7));
  return [...array].sort(() => Math.random() - 0.5).splice(randomIndex, 8);
};
