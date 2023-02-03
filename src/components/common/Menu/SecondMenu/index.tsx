import classNames from 'classnames';
import React, { FC, useContext } from 'react';
import { MenuItemProps } from '..';
import { MenuContext } from '../Context/context';
import ThirdMenu from '../ThirdMenu';

interface SecondMenuProps {
  item: MenuItemProps;
}

const SecondMenu: FC<SecondMenuProps> = ({ item }) => {
  const { prefixCls, flattenKeys } = useContext(MenuContext);

  if (!Array.isArray(item.children)) return null;

  const contentCls = prefixCls + '-menu-content';

  return (
    <div className={contentCls}>
      {item.children.map((menu) => {
        const { key, icon, label, children } = menu;
        const Icon: any = icon;
        const active = flattenKeys?.includes(menu.key);

        return (
          <div key={key} className={`${contentCls}-second`}>
            <div
              className={classNames(`${contentCls}-box fw-bold`, { active })}
            >
              {Icon && (
                <span className={`${contentCls}-box-icon`}>
                  <Icon size={14} />
                </span>
              )}
              {label}
            </div>
            {children?.map((child) => (
              <ThirdMenu key={child.key} item={child} contentCls={contentCls} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default SecondMenu;
