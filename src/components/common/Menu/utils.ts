interface configProps {
  idKey?: string;
  childrenKey?: string;
}
// 查询树结构父级路径
export function findTreeParentPath<idType>(
  array: any[],
  id: idType,
  config: configProps = {},
) {
  const { idKey = 'id', childrenKey = 'children' } = config;
  const stack: idType[] = [];
  let going = true;
  let walker = (array: any[], id: idType) => {
    array.forEach((item) => {
      if (!going) return;
      stack.push(item[idKey]);
      if (item[idKey] === id) {
        going = false;
      } else if (item[childrenKey]) {
        walker(item[childrenKey], id);
      } else {
        stack.pop();
      }
    });
    if (going) stack.pop();
  };

  walker(array, id);

  return stack;
}

// 拍平数组
export function flattenArray(arr: any[]) {
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flattenArray(cur) : cur);
  }, []);
}
