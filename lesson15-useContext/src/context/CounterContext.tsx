// useContext is a React Hook that lets you read and subscribe to context from your component.
// https://react.dev/reference/react/useContext
import { createContext } from "react";

type StateType = {
  count: number,
  text: string,
}