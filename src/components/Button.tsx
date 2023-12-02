import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  classNames: string;
  onClick?: (event: any) => void;
}

export const Button = ({ children, classNames, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={twMerge(
          "text-white font-bold py-2 px-4 rounded",
          classNames
        )}
      >
        {children}
      </button>
    </div>
  );
};
