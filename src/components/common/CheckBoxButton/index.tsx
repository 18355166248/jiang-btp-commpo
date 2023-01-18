import { isFunction } from 'lodash-es';
import React, { FC, useEffect, useState } from 'react';
import './style/index.less';

interface itemProps {
  label: string;
  value: string | number;
}

interface Props {
  options: itemProps[];
  value?: any[];
  onChange?: (val: any[]) => void;
  className?: string;
}

const CheckBoxButton: FC<Props> = ({
  options,
  value,
  onChange,
  className = '',
}) => {
  const [selectList, setSelectList] = useState<any[]>([]);

  useEffect(() => {
    setSelectList(value || []);
  }, [value]);

  function _onChange(opt: itemProps) {
    const index = selectList.findIndex((select) => select === opt.value);
    if (index === -1) {
      selectList.push(opt.value);
    } else {
      selectList.splice(index, 1);
    }
    // 如果value没有值默认是非受控 需要自己设置值 否则受控value改变
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !value && setSelectList([...selectList]);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isFunction(onChange) && onChange([...selectList]);
  }

  return (
    <div className={`checkbox-button ${className}`}>
      {options?.map((opt) => (
        <span
          onClick={() => _onChange(opt)}
          className={`btn ${selectList.includes(opt.value) ? 'active' : ''}`}
          key={opt.value}
        >
          {opt.label}
        </span>
      ))}
    </div>
  );
};

export default CheckBoxButton;
