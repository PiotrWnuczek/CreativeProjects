const initial = { skills: [] };

const skillReducer = (state = initial, action) => {
  switch (action.type) {
    case 'CREATESKILL_SUCCESS':
      console.log(action.data);
      return state;
    case 'CREATESKILL_ERROR':
      console.log(action.err);
      return state;
    case 'UPDATESKILL_SUCCESS':
      console.log(action.data);
      return state;
    case 'UPDATESKILL_ERROR':
      console.log(action.err);
      return state;
    case 'REMOVESKILL_SUCCESS':
      console.log(action.id);
      return state;
    case 'REMOVESKILL_ERROR':
      console.log(action.err);
      return state;
    default: return state;
  }
};

export default skillReducer;
