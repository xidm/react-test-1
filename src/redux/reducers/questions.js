const initialState = {
  Questions: null
};
  
export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_Questions": {
      return {
        Questions : action.content
      };
    }
    default:
      return state;
  }
}
  