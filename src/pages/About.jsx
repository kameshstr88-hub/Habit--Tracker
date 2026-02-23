function About() {
  return (
    <div className="page">
      <h2>About This Project</h2>

      <p style={styles.text}>
        <strong>FocusFlow</strong> is a simple habit and focus tracking application
        built to understand how modern React applications manage navigation and
        shared state.
      </p>

      <h3 style={styles.heading}>Why this app?</h3>
      <p style={styles.text}>
        Small daily habits play a major role in productivity and self-discipline.
        This app helps users list their focus areas and mark them as completed,
        encouraging consistency.
      </p>

      <h3 style={styles.heading}>Technologies Used</h3>
      <ul style={styles.list}>
        <li>React – component-based UI</li>
        <li>React Router – page navigation without reload</li>
        <li>Context API – global state management</li>
      </ul>

      <h3 style={styles.heading}>What I Learned</h3>
      <p style={styles.text}>
        Through this project, I learned how to use Context API to avoid prop
        drilling and how React Router helps in creating multi-page experiences
        inside a single-page application.
      </p>
    </div>
  );
}

const styles = {
  heading: {
    marginTop: "20px",
    marginBottom: "8px"
  },
  text: {
    color: "#555",
    lineHeight: "1.6"
  },
  list: {
    color: "#555",
    paddingLeft: "20px"
  }
};

export default About;