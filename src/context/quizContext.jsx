import { createContext, useContext, useState, useEffect } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [house, setHouse] = useState(() => localStorage.getItem("house"));

  useEffect(() => {
    if (house) {
      localStorage.setItem("house", house);
    } else {
      localStorage.removeItem("house");
    }
  }, [house]);

  return (
    <QuizContext.Provider value={{ house, setHouse }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);