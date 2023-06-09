import React, { ReactElement } from "react";
import { IUser } from "../models/User";

type HeadingProps = { title: string };

const Heading = ({ title }: HeadingProps, user: IUser): ReactElement => {
  return <h1>
    Greeting: {title}
    User Info: {user.userName}
  </h1>;
};

export default Heading;
