export const sliceText = (text, startIndex, endIndex) =>
  text.slice(startIndex, endIndex);

const numberFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "IDR",
});

export const generateIDR = (text) => numberFormat.format(text);
