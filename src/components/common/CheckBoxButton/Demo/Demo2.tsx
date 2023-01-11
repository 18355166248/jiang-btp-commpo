/**
 * title: 受控模式
 * description: 通过 value 监听改变, 动态传入 value 控制选中项
 */

import { CheckBoxButton } from 'jiang-btp-compo';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState([1]);
  function onChange(v: string[]) {
    setValue(v);
  }
  return (
    <CheckBoxButton
      value={value}
      options={[
        { label: '北京', value: 1 },
        { label: '上海', value: 2 },
        { label: '安徽', value: 3 },
      ]}
      onChange={onChange}
    />
  );
};
