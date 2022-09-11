export function getId(url: string): number {
  return +url?.split('/')[5];
}

export function getHost(): string {
  return 'https://swapi.dev/api';
}
