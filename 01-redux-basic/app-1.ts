// Actions

interface Action { //Object rules
  type: string;
  payload?: any;
}

// const incrementAction: Action = {
//   type: 'INCREMENTS'
// }

function reducer( state = 10, action: Action ) {
  
  if (action.type === 'INCREMENTS') {
    return state += 1;
  }

  return state;
}

//Use reducer

const incrementAction: Action = {
  type: 'INCREMENTS'
}

console.log( reducer(10, incrementAction ));