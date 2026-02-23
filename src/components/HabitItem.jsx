import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";

function HabitItem({ habit }) {
  const { completeHabit } = useContext(HabitContext);

  return (
    <div style={styles.card}>
      <span>{habit.text}</span>
      <button
        style={styles.done}
        onClick={() => completeHabit(habit.id)}
      >
        Done
      </button>
    </div>
  );
}

const styles = {
  card: {
    background: "#f9fafb",
    padding: "12px 16px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px"
  },
  done: {
  background: "#22c55e",
  color: "white",
  padding: "6px 14px",
  border: "none",
  borderRadius: "999px",  
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "500"
}
};

export default HabitItem;