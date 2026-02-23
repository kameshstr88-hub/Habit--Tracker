import { createContext, useState } from "react";

export const HabitContext = createContext();

export function HabitProvider({ children }) {
  const [habits, setHabits] = useState([]);

  function addHabit(text) {
    setHabits([...habits, { id: Date.now(), text, done: false }]);
  }

  function completeHabit(id) {
    setHabits(
      habits.map(h =>
        h.id === id ? { ...h, done: true } : h
      )
    );
  }

  return (
    <HabitContext.Provider value={{ habits, addHabit, completeHabit }}>
      {children}
    </HabitContext.Provider>
  );
}