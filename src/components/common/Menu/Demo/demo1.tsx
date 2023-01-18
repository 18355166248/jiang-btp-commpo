/**
 * title: 普通
 * description: 通过 onChange 获取已经选中的值
 */

import { Menu } from 'jiang-btp-compo';
import React, { useState } from 'react';
import { items } from './data/index';

export default () => {
  const [selectedKeys, setSelectedKeys] = useState(['2']);
  function onChange(keys: string[], value: any) {
    console.log(keys, value);
    setSelectedKeys(keys);
  }
  return (
    <div
      style={{ display: 'inline-block', width: 66, border: '1px solid #ccc' }}
    >
      <Menu items={items} onChange={onChange} selectedKeys={selectedKeys} />
    </div>
  );
};
