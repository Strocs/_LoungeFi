export function stringToNumber(inputString) {
  // Simple hash function
  let hash = 0
  for (let i = 0; i < inputString.length; i++) {
    hash = (hash << 5) - hash + inputString.charCodeAt(i)
  }

  // Normalize to the range [0, 1]
  const normalizedHash = (hash % 1000) / 1000

  return normalizedHash
}
