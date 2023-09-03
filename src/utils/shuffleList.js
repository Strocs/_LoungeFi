export const shuffleList = ({ list }) => {
  const shuffledList = [...list]
  return shuffledList.sort(() => Math.random() - 0.5)
}
