const initial = {
  elements: []
};

const elementReducer = (state = initial, action) => {
  switch (action.type) {
    case 'CREATEELEMENT_SUCCESS':
      console.log(action.data);
      return state;
    case 'CREATEELEMENT_ERROR':
      console.log(action.err);
      return state;
    case 'UPDATEELEMENT_SUCCESS':
      console.log(action.data);
      return state;
    case 'UPDATEELEMENT_ERROR':
      console.log(action.err);
      return state;
    case 'REMOVEELEMENT_SUCCESS':
      console.log(action.id);
      return state;
    case 'REMOVEELEMENT_ERROR':
      console.log(action.err);
      return state;
    default: return state;
  }
};

export default elementReducer;
