/**
 * title: 非受控模式
 * description: 通过 onChange 获取已经选中的值
 */

import { CheckBoxButton } from 'jiang-btp-compo';
import React from 'react';

export default () => {
  function onChange(value: string[]) {
    console.log(value);
  }
  return (
    <CheckBoxButton
      options={[
        { label: '北京', value: 1 },
        { label: '上海', value: 2 },
        { label: '安徽', value: 3 },
      ]}
      onChange={onChange}
    />
  );
};
