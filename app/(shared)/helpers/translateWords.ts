export function translateKeys<T extends {}>(path: string, key: keyof T): string {
  return `${path}${key.toString()}`;
}
