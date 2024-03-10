import React, { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextType {
  answers: string[] | null;
  setAnswers: React.Dispatch<React.SetStateAction<string[] | null>>;
  clearAnswers: () => void;
}

const defaultAnswers: string[] | null = null;

const AnswersContext = createContext<AuthContextType>({
  answers: defaultAnswers,
  setAnswers: () => {},
  clearAnswers: () => {},
});

export const useAnswers = () => useContext(AnswersContext);

export function AnswersProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<string[] | null>(defaultAnswers);

  const clearAnswers = () => {
    setAnswers(null); 
    console.log("Clear answer"+answers);
  }
  return (
    <AnswersContext.Provider value={{ answers, setAnswers, clearAnswers }}>
      {children}
    </AnswersContext.Provider>
  );
}

export default AnswersProvider; // เพิ่ม export default ที่นี่
