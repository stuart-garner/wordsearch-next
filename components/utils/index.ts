export const getHexColor = (color?: string) => {
  const hex = color?.slice(2, 8);
  return `#${hex}`;
};
