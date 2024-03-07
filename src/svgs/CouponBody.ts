export const CouponBody = (
  width: number,
  height: number,
  isSelected?: boolean
) => {
  return `
  <svg height="${height}" width="${width}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 0 0 L ${width} 0 L ${width} ${height / 4} A ${height / 4} ${
    height / 4
  } 0 0 0 ${width} ${height * (3 / 4)} L ${width} ${height} L 0 ${height} L 0 ${
    height * (3 / 4)
  } A ${height / 4} ${height / 4} 0 0 0 0 ${height / 4} Z" fill="${
    isSelected ? "#E51E35" : "#FFF0F1"
  }" stroke-width="1" stroke="${isSelected ? "#E51E35" : "#FFF0F1"}"/>
  <path d="M 0 0 L 0 ${height / 4} 0 ${height / 4} A ${height / 4} ${
    height / 4
  } 0 0 1 0 ${height * (3 / 4)} L 0 ${height}" stroke="${
    isSelected ? "#E51E35" : "#FF6173"
  }" stroke-width="1" ${!isSelected && "stroke-dasharray='3, 3'"} />
  <path d="M ${width} 0 L ${width} ${height / 4} A ${height / 4} ${
    height / 4
  } 0 0 0 ${width} ${height * (3 / 4)} L ${width} ${height}" stroke="${
    isSelected ? "#E51E35" : "#FF6173"
  }" stroke-width="1" ${!isSelected && "stroke-dasharray='3, 3'"} />
</svg>
`;
};
