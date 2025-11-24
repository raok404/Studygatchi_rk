import "./App.css";
import SettingsMenu from "./components/SettingsMenu";
import NavBar from "./components/NavBar"; //
import TimerPage from "./components/TimerPage";
import ToDoList from "./ToDoList";
import GooberHome from "./components/GooberHomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // had to add because bootstrap defaults to light mode
  document.documentElement.setAttribute("data-bs-theme", "dark");

  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<GooberHome />} />
          <Route path="/settings" element={<SettingsMenu />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="*" element={<GooberHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
