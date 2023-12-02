import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  classNames: string;
}

export const Button = ({ children, classNames }: ButtonProps) => {
  return (
    <div>
      <button
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
