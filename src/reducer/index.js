import update from 'immutability-helper';

const initialState = {
  photos: [],
  search: ''
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case 'GET_PHOTOS':
      return update(state, {photos: {$set: action.payload}});
    case 'SET_SEARCH':
      return update(state, {search: {$set: action.payload}});
    default:
      return state;
  }
}

export default reducer;
