export const imageDimens = (dimension, offset = 100) => {
  const width = dimension * (offset / 100);
  const height = dimension * (offset / 100);
  return {width, height};
};
export const Dimens = {
  globalPaddingHorizontal: 20,
};
