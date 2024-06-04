import { cn } from "@/lib/utils";
import React from "react";

interface IconButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactElement;
  className?: string;
}
export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition"
      )}
    >
      {icon}
    </button>
  );
};
