import Header from "./components/header/header";
import School from "./components/school/school";
import TodoList from "./components/todo-list/todo-list";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<School />} />
          <Route exact path="/todoList" element={<TodoList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
