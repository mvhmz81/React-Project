//import React from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary">
      <h1>{children}</h1>
    </div>
  );
};
