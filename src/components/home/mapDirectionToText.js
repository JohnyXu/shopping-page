export const DIRECTION = {
  ASC: 'ASC',
  DESC: 'DESC',
};

export const SIZE = {
  ALL: 'All',
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL',
};

function mapDirectionToText(direction) {
  if (!Object.values(DIRECTION).includes(direction)) {
    return '';
  }
  return {
    [DIRECTION.ASC]: 'price low-to-high',
    [DIRECTION.DESC]: 'price high-to-low',
  }[direction];
}

export default mapDirectionToText;
