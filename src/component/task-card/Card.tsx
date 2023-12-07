import "./Card.css";
import { Todo } from "../helper/Types";
import { useState } from "react";
import Task from "./SigleTask";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Card: React.FC<Props> = ({ todoList, setTodoList }) => {
  const sortedList = todoList.sort((a, b) => a.id - b.id);
  console.log("todoList: Card", todoList);

  return (
    <div className="card-wrapper">
      <div className="done-item">
        {sortedList.map(
          (todo) =>
            !todo.isDone && (
              <Task todo={todo} todoList={todoList} setTodoList={setTodoList} />
            )
        )}
      </div>
      <div className="done-item">
        {sortedList.map(
          (todo) =>
            todo.isDone && (
              <Task todo={todo} todoList={todoList} setTodoList={setTodoList} />
            )
        )}
      </div>
    </div>
  );
};

export default Card;
