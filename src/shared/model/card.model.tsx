export interface ICard {
  id?: number;
  avatar?: string;
  name: String;
  type?: cardType;
}

export enum cardType {
  user,
  group
}
