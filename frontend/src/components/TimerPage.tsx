import Layout from "./Layout"
import Timer from "./Timer"
import ToDoList from "../ToDoList";

export default function TimerPage(){
    return (
        <Layout
          topBoxContent={<Timer />}
          bottomBoxContent={<ToDoList />}
        />
    )
}