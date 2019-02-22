
export const addList = (data) => {

  return { type: 'ADDLIST', data: data };
  
  // return dispatch => {
  //   return fetch('https://www.google.co.in/')
  //     .then((responseJson) => {
  //           dispatch(success(data));
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
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