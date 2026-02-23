import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";

function Completed() {
  const { habits } = useContext(HabitContext);

  return (
    <div className="page">
      <h2>Completed Focus</h2>

      {habits.filter(h => h.done).length === 0 && (
        <p style={{ color: "#777" }}>
          You haven’t completed any habits yet.
        </p>
      )}

      {habits
        .filter(h => h.done)
        .map(h => (
          <div key={h.id} style={{ marginBottom: "8px" }}>
            ✅ {h.text}
          </div>
        ))}
    </div>
  );
}

export default Completed;