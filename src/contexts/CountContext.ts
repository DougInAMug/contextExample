import { createContext, Dispatch, SetStateAction } from "react";

interface ContextType {
  countValue: number;
  setCountValue: Dispatch<SetStateAction<number>>;
}

export const CountContext = createContext<ContextType>({
  countValue: 0,
  setCountValue: () => {},
});
