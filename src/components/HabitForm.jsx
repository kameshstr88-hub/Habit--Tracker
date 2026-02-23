import { useContext, useState } from "react";
import { HabitContext } from "../context/HabitContext";

function HabitForm() {
  const [text, setText] = useState("");
  const { addHabit } = useContext(HabitContext);

  function handleAdd() {
    if (text.trim() === "") return;
    addHabit(text);
    setText("");
  }

  return (
    <div style={styles.wrapper}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What do you want to focus on?"
        style={styles.input}
      />
      <button onClick={handleAdd} style={styles.button}>
        Add
      </button>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    gap: "10px",
    margin: "20px 0"
  },
  input: {
    flex: 1,
    padding: "12px 15px",
    borderRadius: "25px",
    border: "1px solid #ddd",
    outline: "none"
  },
  button: {
    padding: "12px 20px",
    background: "#667eea",
    color: "white"
  }
};

export default HabitForm;