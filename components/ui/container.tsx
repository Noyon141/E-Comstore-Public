import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-7xl mx-auto md:mx-8 xl:mx-12">{children}</div>;
};
