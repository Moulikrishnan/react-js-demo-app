
export const addList = (data) => {

  return dispatch => {
    return fetch('http://localhost:3000')
      .then((responseJson) => {
            dispatch(success(data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

function success(data) {
  return { type: 'ADDLIST', data: data };
}


export const removeList = (key) => {
  return {
    type: 'REMOVELIST',
    key: key
  };
} 