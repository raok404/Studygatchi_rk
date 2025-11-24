import { useState } from "react"
import GooberInfo from "./GooberInfo";
import GooberPlayMenu from "./GooberPlayMenu";
import GooberFoodMenu from "./GooberFoodMenu";
import GooberGiftMenu from "./GooberGiftMenu";

interface Props {
  setXP: (arg0: number) => void;
  setLevel: (arg0: number) => void;
  setMoney: (arg0: number) => void;
  setHealth: (arg0: number) => void;
  currentXP: number;
  level: number;
  money: number;
  currentHealth: number;
}

export default function HomeContent({
  setXP,
  setLevel,
  setMoney,
  setHealth,
  currentXP,
  level,
  money,
  currentHealth,
}: Props) {
  const [currentPage, setPage] = useState("home");
  return(
    <>
    <div
          style={{
            backgroundColor: "grey",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            margin: "-16px",
            marginTop: "20px",
            padding: "10px",
          }}
        >
          <button
            type="button"
            className={
              "btn btn-primary interactionNavBtn " +
              (currentPage === "food" ? "active" : "")
            }
            onClick={() => setPage("food")}
          >
            Food
          </button>
          <button
            type="button"
            className={
              "btn btn-primary interactionNavBtn " +
              (currentPage === "play" ? "active" : "")
            }
            onClick={() => setPage("play")}
          >
            Play
          </button>
          <button
            type="button"
            className={
              "btn btn-primary interactionNavBtn " +
              (currentPage === "gift" ? "active" : "")
            }
            onClick={() => setPage("gift")}
          >
            Gift
          </button>
        </div>
        <div style={{ paddingTop: "30px" }}>
          {currentPage == "home" && (
            <GooberInfo
              setXP={setXP}
              setLevel={setLevel}
              setMoney={setMoney}
              setHealth={setHealth}
              currentXP={currentXP}
              level={level}
              money={money}
              currentHealth={currentHealth}
            />
          )}
          {currentPage == "play" && <GooberPlayMenu pageSetter={setPage} />}
          {currentPage == "food" && <GooberFoodMenu pageSetter={setPage} />}
          {currentPage == "gift" && <GooberGiftMenu pageSetter={setPage} />}
        </div>   
    </>
  )
}