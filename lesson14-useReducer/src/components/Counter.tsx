import CSS from 'csstype';
import React, { useReducer, useState } from "react";
import { ReactNode } from "react";

const btnStyle: CSS.Properties = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  fontSize: "21px",
  width: "120px",
  height: "50px"
};

type CounterProps = {
  children: (num: number) => ReactNode;
};

type StateType = {
  count: number
}

const enum REDUCER_ACTIVE_TYPE {
  INCREMENT,
  DECREMENT
}

const initState: StateType = {
  count: 0
}

type ReducerAction = {
  type: REDUCER_ACTIVE_TYPE
}
const fReducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTIVE_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }

    case REDUCER_ACTIVE_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 }

    default:
      break;
  }
  return { ...state, count: state.count }
}


const Counter = ({ children }: CounterProps) => {
  const [mySelfCount, setMySelfCount] = useState<number>(0);
  const increment = () => setMySelfCount(prev => prev + 1);
  const decrement = () => setMySelfCount(prev => prev - 1);

  const [state, dispatch] = useReducer(fReducer, initState);
  const rIncrement = () => dispatch({ type: REDUCER_ACTIVE_TYPE.INCREMENT });
  const rDecrement = () => dispatch({ type: REDUCER_ACTIVE_TYPE.DECREMENT });

  return (
    <div className=''>
      <h2>My Self Count is {
        children(mySelfCount)
      }
      </h2>
      <div>
        <button style={btnStyle} onClick={increment}>+</button>
        <button style={btnStyle} onClick={decrement}>-</button>
      </div>
      <h2>My Self Count is {
        children(state.count)
      }
      </h2>
      <div>
        <button style={btnStyle} onClick={rIncrement}>+</button>
        <button style={btnStyle} onClick={rDecrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
