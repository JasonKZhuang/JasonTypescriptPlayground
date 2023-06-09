import { ListItems } from "../models/ListItems";

// put a comma next to T to solve the general problem
// or we can use extends object like this <T extends object>
const List = <T,>({ items, render }: ListItems<T>) => {
  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{render(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
