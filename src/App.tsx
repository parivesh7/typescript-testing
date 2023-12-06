import React, { useState } from "react";
import "./App.css";
import InputField from "./component/form/form";
import Card from "./component/task-card/Card";
import { Todo } from "./component/helper/Types";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTask = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoList([...todoList, { id: Date.now(), isDone: false, todo }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <h2>This is the typescript testing app!!!</h2>
      <InputField todo={todo} setTodo={setTodo} addTask={addTask} />
      <Card todoList={todoList} />
    </div>
  );
};

export default App;
