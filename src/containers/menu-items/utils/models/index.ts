export interface IMenu {
  id: number;
  description: string;
  name: string;
  orden: number;
}

export interface IMenuItem extends IMenu {
  image: object;
  route: string;
}
