import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>FocusFlow</h1>
      <nav style={styles.nav}>
        <NavLink to="/" style={styles.link}>Home</NavLink>
        <NavLink to="/completed" style={styles.link}>Completed</NavLink>
        <NavLink to="/about" style={styles.link}>About</NavLink>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: "20px 40px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    margin: 0,
    fontWeight: "600"
  },
  nav: {
    display: "flex",
    gap: "25px"
  },
  link: {
    color: "white",
    fontWeight: "500"
  }
};

export default Navbar;