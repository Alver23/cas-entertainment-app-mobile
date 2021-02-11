interface IItem {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  active: boolean;
}

export interface IItemProps {
  item: IItem;
  onPress: (id: number) => void;
}
