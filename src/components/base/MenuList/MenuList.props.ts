export interface MenuListProps {
  menuId: string;
  menuImage: string;
  menuName: string;
  menuPrice: number;
  selected?: boolean;
  handleSelect: (menuId: string) => void;
}
