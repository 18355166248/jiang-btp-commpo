import classNames from 'classnames';
import React, { FC, useContext } from 'react';
import { MenuItemProps } from '..';
import { MenuContext } from '../Context/context';

interface ThirdMenuProps {
  item: MenuItemProps;
  contentCls: string;
}

const ThirdMenu: FC<ThirdMenuProps> = ({ item, contentCls }) => {
  const { flattenKeys, onChangeMenu } = useContext(MenuContext);
  const active = flattenKeys?.includes(item.key);
  const { key, label } = item;

  function _onChange() {
    onChangeMenu(item);
  }

  return (
    <div
      onClick={_onChange}
      key={key}
      className={classNames(`${contentCls}-box ${contentCls}-box-three`, {
        active,
      })}
    >
      {label}
    </div>
  );
};

export default ThirdMenu;
