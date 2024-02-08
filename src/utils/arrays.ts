export const arrayChunk = (arr: Array<any>, n: number) => {
  const array = arr.slice();
  const chunks = [];
  while (array.length) chunks.push(array.splice(0, n));
  return chunks;
};
