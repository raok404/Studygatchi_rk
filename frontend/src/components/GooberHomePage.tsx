import { useState } from "react"

import Layout from "./Layout"
import GooberImage from "./GooberImage"
import HomeContent from "./HomeContent"

export default function GooberHomePage(){
    // Current Players data
    const [currentXP, setXP] = useState(50);
    const [level, setLevel] = useState(9);
    const [money, setMoney] = useState(0);
    const [currentHealth, setHealth] = useState(50);

    return (
        <Layout
          topBoxContent={<GooberImage />}
          bottomBoxContent={<HomeContent 
            setXP={setXP}
            setLevel={setLevel}
            setMoney={setMoney}
            setHealth={setHealth}
            currentXP={currentXP}
            level={level}
            money={money}
            currentHealth={currentHealth}
          />}
        />
    )
}