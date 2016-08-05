// -----------------------------------------------------
// Define the state of Component
// -----------------------------------------------------

const videoState = {
  loaded: false
};

// -----------------------------------------------------
// Subscribe the actions of component
// -----------------------------------------------------

const videoReducer = (state = videoState, action) => {
  let newState = Object.assign({}, state);

  switch( action.type ) {
    case 'VIDEO_LOADED':
      newState.loaded = true;
      return newState;

    default:
      return state;
  }
};

export default videoReducer;
