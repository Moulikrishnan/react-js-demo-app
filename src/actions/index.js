
export const addList = (data) => {
  return {
    type: 'ADDLIST',
    data: data
  };
} 

export const removeList = (key) => {
  return {
    type: 'REMOVELIST',
    key: key
  };
} 