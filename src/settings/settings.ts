import { Color } from '../utils/color'

export const settings = Object.freeze({
  grid: {
    rowNodes: 15,
    columnNodes: 30,
    nodeSize: 20,
    nodeOffset: 1,
    color: new Color(245, 245, 245, 1),
  },
  blocks: {
    numOfBlocks: 30,
  }
})