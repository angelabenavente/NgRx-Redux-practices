// Actions

interface Action { //Object rules
  type: string;
  payload?: any;
}

// const incrementAction: Action = {
//   type: 'INCREMENTS'
// }

function reducer( state = 10, action: Action ) {
  
  // if (action.type === 'INCREMENTS') {
  //   return state += 1;
  // }

  switch ( action.type ) { // better use switch in reducer
    case 'INCREMENTS':
      return state += 1;

    case 'DECREMENTS':
        return state -= 1;
  
    default:
      return state;
  }

}

//Use reducer

const incrementAction: Action = {
  type: 'INCREMENTS'
}

console.log( reducer(10, incrementAction )); // 11

const decrementAction: Action = {
  type: 'DECREMENTS'
}

console.log( reducer(10, decrementAction )); // 9