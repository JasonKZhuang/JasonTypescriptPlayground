import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent } from "react";
import { IUser } from "./models/User";
import Counter from "./components/Counter";

// this is to define a function signature no concreted body
type fibFunc = (n: number) => number;

const fib: fibFunc = (n: number) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

const myNum = 37;


function MainApp() {
  //
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<IUser | null>(null);
  const [user2, setUser2] = useState<IUser>({} as IUser);
  const [users, setUsers] = useState<IUser[]>([]);

  //
  // useEffect hook
  // when using the Strick.Mode, the react will do twice this effect
  useEffect(() => {
    console.log("mounting")

    // this is clean up function
    return () => console.log("unMounting")
  }, [])
  //
  useEffect(() => {
    console.log("Users:", users)

    // this is clean up function
    return () => console.log("unMounting")
  }, [users])

  // useCallback hook
  // https://react.dev/reference/react/useCallback
  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  // press Alt + Z to wrap the line code in VsCode
  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => {
    setCount(prev => prev + 1);
    console.log('e', e);
  }, []);


  // https://react.dev/reference/react/useMemo
  // we will use this for an expensive calculation, taking while to calculate and might hold up everything in our component until it had value
  // if you have an expensive calculation, it takes time to calculate at the first time, but after that, the function just take result from memory
  // this is very similar to SpringBoot cache
  const result = useMemo<number>(() => fib(myNum), [myNum]);

  // https://react.dev/reference/react/useRef
  // useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  const refInput = useRef<HTMLInputElement>(null);
  console.log('refInput?.current', refInput?.current)
  console.log('refInput?.current', refInput?.current?.value)

  return (
    <div>
      <h1>Some Title</h1>
      <Counter>
        {(num) => {
          return <div style={{ color: "red", width: "200px" }}>{
            num + 2
          }</div>
        }}
      </Counter>

    </div>
  );
}
export default MainApp;
