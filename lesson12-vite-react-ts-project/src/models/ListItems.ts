import { ReactNode } from "react";

export interface ListItems<T> {
  items: T[];
  render: (item: T) => ReactNode;
}