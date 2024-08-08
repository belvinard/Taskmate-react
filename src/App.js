import { useEffect, useState } from "react";
 
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask"; 
import { ShowTask } from "./components/ShowTask"; 

import './App.css';

function App() {

  // const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  // const [task, setTask] = useState({});

  // useEffect(() => {
  //   localStorage.setItem("tasklist", JSON.stringify(tasklist))
  // }, [tasklist]);

  const [tasklist, setTasklist] = useState(() => {
    try {
      const storedTaskList = localStorage.getItem("tasklist");
      return storedTaskList ? JSON.parse(storedTaskList) : [];
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
      return [];
    }
  });

  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist]);


  return (
    <div className="App">
      <Header />
      <AddTask 
        tasklist={tasklist} 
        setTasklist={setTasklist} 
        task={task}
        setTask={setTask}
      />
      <ShowTask 
        tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
     
    </div>
  );
}

export default App;
