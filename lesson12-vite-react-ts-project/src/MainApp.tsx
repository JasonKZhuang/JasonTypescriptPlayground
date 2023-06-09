import { useState } from "react";
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

function MainApp() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Heading title={"Hello!"} />
      <Section title="The section new title">This is children contents</Section>
      <Counter setCount={setCount}>
        <div style={{ width: "200px", height: "200px", backgroundColor: "red" }}>
          Parent Counter is {count}
          <button>a Child Button</button>
        </div>

      </Counter>
      <List
        items={["Coffee", "Tacos", "Code"]}
        render={(item: string) => (
          <span className="gold" key={item}>
            {item}
          </span>
        )}
      />
    </>
  );
}
export default MainApp;
