import CSS from 'csstype';
import React, { ChangeEvent, useReducer, useState } from "react";
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

type ReducerAction = {
  type: REDUCER_ACTIVE_TYPE,
  payload?: string,
}

const enum REDUCER_ACTIVE_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

const initState: StateType = {
  count: 0,
  text: "",
}


// this is the reducer function, the dispatch method will go to this function
const fReducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTIVE_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }
    case REDUCER_ACTIVE_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 }
    case REDUCER_ACTIVE_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? '' }
    default:
      throw new Error()
  }
  return { ...state, count: state.count }
}

// this is the main function component 
const Counter = ({ children }: CounterProps) => {
  // useState
  const [mySelfCount, setMySelfCount] = useState<number>(0);
  const increment = () => setMySelfCount(prev => prev + 1);
  const decrement = () => setMySelfCount(prev => prev - 1);

  // useReducer
  // useReducer is a React Hook that lets you add a reducer to your component.
  // https://react.dev/reference/react/useReducer
  // The dispatch method will point to fReducer function,
  // the state is automatically passed to fReducer via the first parameter,
  // and the parameter of dispatch method is the second parameter type defined in fReducer function
  // in a nutshell, useReducer is passing three arguments,
  // first is the state Object, which is similar to useState
  // second is the Action Object or a Function
  // third is the initial value of state
  // the reducer function can do more thing on the state variable, and return this state variable
  const [state, dispatch] = useReducer(fReducer, initState);
  const rIncrement = () => dispatch({ type: REDUCER_ACTIVE_TYPE.INCREMENT });
  const rDecrement = () => dispatch({ type: REDUCER_ACTIVE_TYPE.DECREMENT });
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTIVE_TYPE.NEW_INPUT,
      payload: e.target.value,
    })
  }


  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <h2>Using useState: {children(mySelfCount)}</h2>
        <button style={btnStyle} onClick={increment}>+</button>
        <button style={btnStyle} onClick={decrement}>-</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Using useReducer: {state.count}</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button style={btnStyle} onClick={rIncrement}>+</button>
          <button style={btnStyle} onClick={rDecrement}>-</button>
        </div>
        <input type="text" onChange={handleTextInput} />
        <h2>Using useReducer State.Text {state.text}</h2>
      </div>
    </div>
  );
};

export default Counter;
