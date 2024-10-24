export const getNextItemIndex = ({ list, itemIndex }) => {
  return itemIndex >= list.length - 1 ? 0 : itemIndex + 1
}

export const getPrevItemIndex = ({ list, itemIndex }) => {
  return itemIndex <= 0 ? list.length - 1 : itemIndex - 1
}
