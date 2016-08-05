// ------------------------------------------------------
// Define Actions
// ------------------------------------------------------

export function started() {
  return { type: 'STARTED_APP' };
}

// ------------------------------------------------------
// Below example of No Pure Actions
// ------------------------------------------------------

export function foo() {
  return (dispatch, getState) => {

  }
}
