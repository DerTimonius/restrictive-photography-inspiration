export function randomizeOutput(arr: Array<string>): string {
  return arr[Math.floor(Math.random() * arr.length)];
}
