import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";
import HabitForm from "../components/HabitForm";
import HabitItem from "../components/HabitItem";

function Home() {
  const { habits } = useContext(HabitContext);

  return (
    <div className="page">
      <h2>Today’s Habit</h2>
      <p style={{ color: "#666" }}>
        Small habits done daily lead to big changes.
      </p>

      <HabitForm />

      {habits.filter(h => !h.done).length === 0 && (
        <p style={{ marginTop: "20px", color: "#999" }}>
          No active habits. Add one to get started 
        </p>
      )}

      {habits
        .filter(h => !h.done)
        .map(h => (
          <HabitItem key={h.id} habit={h} />
        ))}
    </div>
  );
}

export default Home;