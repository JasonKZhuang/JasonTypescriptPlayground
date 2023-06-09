import React, { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

const Section = ({ title = "My SubHeading", children }: SectionProps) => {
  return (
    <section>
      <h2>{children}</h2>
      <h2>{title}</h2>
    </section>
  );
};

// old fashion
/*
const Section: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <section>
      <h2>{children}</h2>
      <h2>{title}</h2>
    </section>
  );
};
*/

export default Section;
