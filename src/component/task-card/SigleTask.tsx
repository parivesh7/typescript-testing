import { useState } from "react";
import { Todo } from "../helper/Types";
import "./Card.css";

interface Props {
  todo: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Task: React.FC<Props> = ({ todo, todoList, setTodoList }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>("");

  const deleteTodo = (todo: Todo) => {
    setTodoList(todoList.filter((t) => t.id !== todo.id));
  };

  const markCompleted = (todo: Todo) => {
    const updatedList = todoList.map((t) =>
      t.id === todo.id ? { ...t, isDone: true } : t
    );
    setTodoList(updatedList);
  };

  const markPending = (todo: Todo) => {
    const updatedList = todoList.map((t) =>
      t.id === todo.id ? { ...t, isDone: false } : t
    );
    setTodoList(updatedList);
  };

  const handleEdit = (e: React.SyntheticEvent, todo: Todo) => {
    e.preventDefault();
    setTodoList(
      todoList.map((t) => (t.id === todo.id ? { ...t, todo: editedTodo } : t))
    );
    setIsEdit(false);
  };

  console.log("todoList: Main", todoList);
  return (
    <>
      {!todo.isDone && (
        <div className="card-item not-done">
          {isEdit ? (
            <div>
              <form
                className="form-wrapper-edit"
                onSubmit={(e) => {
                  handleEdit(e, todo);
                }}
              >
                <input
                  type="input"
                  value={editedTodo}
                  name={`input-${todo.id}`}
                  className="input-f-edit"
                  onChange={(e) => setEditedTodo(e.target.value)}
                />
                <button className="submit-btn-edit" type="submit">
                  Go
                </button>
              </form>
            </div>
          ) : (
            <span>
              <strong>{todo.id + ")   " + todo.todo}</strong>
            </span>
          )}

          <div>
            {!isEdit && (
              <img
                className="action-icon"
                src="/img/edit.png"
                onClick={() => {
                  setIsEdit(true);
                  setEditedTodo(todo.todo);
                }}
                alt="edit"
              />
            )}
            <img
              className="action-icon"
              onClick={() => {
                deleteTodo(todo);
              }}
              src="/img/delete.png"
              alt="delete"
            />
            <img
              className="action-icon"
              onClick={() => {
                markCompleted(todo);
              }}
              src="/img/done.png"
              alt="complete"
            />
          </div>
        </div>
      )}

      {todo.isDone && (
        <div className="card-item done">
          <span>
            <strong>{todo.id + ")   " + todo.todo}</strong>
          </span>
          <div>
            <img
              className="action-icon"
              onClick={() => {
                markPending(todo);
              }}
              src="/img/cancel.png"
              alt="cancel"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
