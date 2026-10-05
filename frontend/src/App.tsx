import "./App.css";
import { useState, useEffect } from "react";
import SettingsMenu from "./components/SettingsMenu";
import NavBar from "./components/NavBar"; //
import Timer from "./components/Timer";
import ToDoList from "./ToDoList";
import GooberMenu from "./components/GooberMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from './components/ThemeProvider';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // had to add because bootstrap defaults to light mode
  document.documentElement.setAttribute("data-bs-theme", "dark");

  // Current Players data
  const [currentXP, setXP] = useState(50);
  const [level, setLevel] = useState(1);
  const [money, setMoney] = useState(0);
  const [currentHealth, setHealth] = useState(50);

  // functions to increment the xp, money, and health
  // xp, money, and health cannot be below 0
  const incrementXP = (increment:number)=> {
    setXP(currentXP + increment >= 0 ? currentXP + increment : 0);
  }
  const incrementMoney = (increment:number) => {
    setMoney(money + increment >= 0 ? money + increment : 0);
  }
  const incrementHealth = (increment:number) => {
    // capped at 100 health
    var newHealth = currentHealth + increment;
    newHealth = (newHealth >= 0 ? newHealth : 0);
    newHealth = (newHealth <= 100 ? newHealth : 100);
    setHealth(newHealth);
  }

  useEffect(()=> {
    // updates the level at every 100 xp points
    setLevel(Math.floor(currentXP/100) + 1)
  }, [currentXP])

  return (
    <ThemeProvider>
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
          <GooberMenu
            setXP={setXP}
            setLevel={setLevel}
            setMoney={setMoney}
            setHealth={setHealth}
            currentXP={currentXP}
            level={level}
            money={money}
            currentHealth={currentHealth}
          />
          <Routes>
            <Route path="/settings" element={<SettingsMenu />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/todo" element={<ToDoList incrementHealth={incrementHealth} incrementMoney={incrementMoney} incrementXP={incrementXP}/>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
