import { createContext } from 'react';
import { MenuItemProps } from '..';

export interface MenuContextProps {
  prefixCls?: string;
  selectedKeys?: string[];
  flattenKeys?: string[];
  parentKeyPaths?: string[][];
  onChangeMenu: (value: MenuItemProps) => void;
}

export const defaultValue = {
  onChangeMenu: () => {},
};

const MenuContext = createContext<MenuContextProps>(defaultValue);

export { MenuContext };
