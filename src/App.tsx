import React, { useState } from "react";
import "./App.css";
import InputField from "./component/form/form";
import Card from "./component/task-card/Card";
import { Todo } from "./component/helper/Types";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  console.log("todoList: App", todoList);
  const addTask = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (todo) {
      const uniqueID =
        todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1;
      setTodoList([...todoList, { id: uniqueID, isDone: false, todo }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <h2>This is the typescript testing app!!!</h2>
      <InputField todo={todo} setTodo={setTodo} addTask={addTask} />
      <Card todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
