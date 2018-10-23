
export function rootReducer(state = { list_data: [{ name: 'Moulikrishnans', created_on: '12/09/2018, 09:00:00' }] }, action) {

  switch (action.type) {

    case 'ADDLIST':
      let newData = action.data;
      let oldState = [...state.list_data, ...newData];
      return Object.assign({}, state, {
        list_data: oldState,
      });
      
    case 'REMOVELIST':
      let updatedArray = [...state.list_data];
      updatedArray.splice(action.key, 1);
      return Object.assign({}, state, {
        list_data: updatedArray,
      });

    default:
      return state;
  }
};

export default rootReducer;
