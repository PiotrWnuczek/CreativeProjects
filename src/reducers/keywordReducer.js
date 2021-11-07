const initial = {
  keywords: [],
};

const keywordReducer = (state = initial, action) => {
  switch (action.type) {
    case 'CREATEPKEYWORD_SUCCESS':
      console.log(action.data);
      return state;
    case 'CREATEPKEYWORD_ERROR':
      console.log(action.err);
      return state;
    case 'UPDATEPKEYWORD_SUCCESS':
      console.log(action.data);
      return state;
    case 'UPDATEPKEYWORD_ERROR':
      console.log(action.err);
      return state;
    case 'REMOVEPKEYWORD_SUCCESS':
      console.log(action.id);
      return state;
    case 'REMOVEPKEYWORD_ERROR':
      console.log(action.err);
      return state;
    default: return state;
  }
};

export default keywordReducer;
