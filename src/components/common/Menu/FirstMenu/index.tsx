import Popover from 'antd/es/popover';
import 'antd/es/popover/style/index';
import classNames from 'classnames';
import React, { FC, useContext, useState } from 'react';
import { MenuItemProps } from '..';
import { activeColor, baseColor } from '../config';
import { MenuContext } from '../Context/context';
import SecondMenu from '../SecondMenu';

export interface FirstMenuProps {
  item: MenuItemProps;
}

const FirstMenu: FC<FirstMenuProps> = ({ item }) => {
  const { prefixCls, flattenKeys } = useContext(MenuContext);

  const Icon = item.icon;
  const ActiveIcon = item.activeIcon;
  const active = flattenKeys?.includes(item.key);

  const CurrentIcon = active ? (ActiveIcon ? ActiveIcon : Icon) : Icon;

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const FirstMenuCls = prefixCls + '-menu';

  return (
    <Popover
      key={item.key}
      content={<SecondMenu item={item} />}
      placement="rightTop"
      overlayClassName={`${FirstMenuCls}-popover`}
      align={{
        offset: [-4, 0],
      }}
      mouseEnterDelay={0.2}
      // open={true}
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={classNames(`${FirstMenuCls}-one`, {
          active,
        })}
      >
        {CurrentIcon && (
          <div className={`${FirstMenuCls}-box-icon`}>
            <CurrentIcon
              size="20"
              fill={active || isHover ? activeColor : baseColor}
            />
          </div>
        )}

        <div className={`${FirstMenuCls}-box-label`}>{item.label}</div>
      </div>
    </Popover>
  );
};

export default FirstMenu;
