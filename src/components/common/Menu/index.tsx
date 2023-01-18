import 'antd/es/popover/style/index';
import classNames from 'classnames';
import { isFunction } from 'lodash-es';
import React, { FC, useMemo } from 'react';
import { MenuContext } from './Context/context';
import FirstMenu from './FirstMenu';
import './style/index.less';
import { findTreeParentPath, flattenArray } from './utils';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
  width?: string | number;
  height?: string | number;
  spin?: boolean;
  rtl?: boolean;
  color?: string;
  fill?: string;
  stroke?: string;
}

export interface MenuItemProps {
  label: React.ReactNode | string;
  key: string;
  icon?: (props: IconProps) => JSX.Element; // 默认图标
  activeIcon?: (props: IconProps) => JSX.Element; // 选择图标
  children?: MenuItemProps[];
}

export interface MenuProps {
  items: MenuItemProps[];
  selectedKeys?: string[];
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (keys: string[], val: MenuItemProps) => void;
}

const Menu: FC<MenuProps> = ({
  className,
  style,
  items,
  prefixCls = 'j-b-c',
  selectedKeys = [],
  onChange,
}) => {
  const menuCls = prefixCls + '-menu';

  // 查询选择key的父级路径id集合
  // 返回的拍平的数组列表和selectedKeys对应的父级路径数组
  const [flattenKeys, parentKeyPaths] = useMemo(() => {
    if (!selectedKeys) return [[], []];
    const keyPaths = selectedKeys.map((key) => {
      const keyPath = findTreeParentPath(items, key, { idKey: 'key' });
      return keyPath;
    });

    const flatten = flattenArray(keyPaths);

    return [flatten, keyPaths];
  }, [selectedKeys]);

  const onChangeMenu = (v: MenuItemProps) => {
    if (selectedKeys.includes(v.key)) return;
    if (isFunction(onChange)) onChange([v.key], v);
  };

  const value = useMemo(
    () => ({
      prefixCls,
      selectedKeys,
      flattenKeys,
      parentKeyPaths,
      onChangeMenu,
    }),
    [prefixCls, selectedKeys, flattenKeys, parentKeyPaths, onChangeMenu],
  );

  return (
    <MenuContext.Provider value={value}>
      <div style={style} className={classNames(menuCls, className)}>
        {items.map((item) => (
          <FirstMenu key={item.key} item={item} />
        ))}
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;
