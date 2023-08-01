import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul style={{ display: "flex", listStyle: "none", gap: 16 }}>
        <li>
          <Link to="/todoList">ToDoList</Link>
        </li>
        <li>
          <Link to="/">HomeWork</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
