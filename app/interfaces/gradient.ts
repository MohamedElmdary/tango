interface Point {
  x: number;
  y: number;
}

class Gradient {
  constructor(
    public colors: [string, string],
    public start: Point = { x: 0, y: 0 },
    public end: Point = { x: 1, y: 1 },
  ) {}
}

export { Gradient };
