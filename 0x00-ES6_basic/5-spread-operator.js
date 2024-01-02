export default function concatArrays(array1, array2, string) {
  return Array.of(...array1, ...array2, ...string);
}
