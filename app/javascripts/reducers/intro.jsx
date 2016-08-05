// -----------------------------------------------------
// Define the state of Component
// -----------------------------------------------------

const introState = {
  open: false
};

// -----------------------------------------------------
// Subscribe the actions of component
// -----------------------------------------------------

const introReducer = (state = introState, action) => {
  let newState = Object.assign({}, state);

  switch( action.type ) {
    case 'INTRO_OPEN':
      newState.open = true;
      return newState;

    case 'INTRO_CLOSE':
      newState.open = false;
      return newState;

    default:
      return state;
  }
};

export default introReducer;
