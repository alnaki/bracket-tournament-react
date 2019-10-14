export function shuffle<T>(array: T[]): T[] {
  let copy = array.slice();
  return copy.sort(() => Math.random() - 0.5);
}
