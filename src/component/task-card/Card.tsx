import "./Card.css";
import { Todo } from "../helper/Types";
import { useState } from "react";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Card: React.FC<Props> = ({ todoList, setTodoList }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>("");

  const deleteTodo = (todo: Todo) => {
    setTodoList(todoList.filter((t) => t.id !== todo.id));
  };

  const markCompleted = (todo: Todo) => {
    const updatedList = todoList.map((t) =>
      t.id === todo.id ? { ...todo, isDone: true } : todo
    );
    setTodoList(updatedList);
  };

  const markPending = (todo: Todo) => {
    const updatedList = todoList.map((t) =>
      t.id === todo.id ? { ...todo, isDone: false } : todo
    );
    setTodoList(updatedList);
  };

  const handleEdit = (e: React.SyntheticEvent, todo: Todo) => {
    e.preventDefault();
    setTodoList(
      todoList.map((t) =>
        t.id === todo.id ? { ...todo, todo: editedTodo } : todo
      )
    );
  };

  const sortedList = todoList.sort((a, b) => a.id - b.id);

  return (
    <div className="card-wrapper">
      <div className="pending-item">
        {sortedList.map((todo) => {
          return (
            !todo.isDone && (
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
                        value={todo.todo}
                        placeholder="Please enter the task details in brief..."
                        name="input"
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
                      onClick={() => setIsEdit(true)}
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
            )
          );
        })}
      </div>
      <div className="done-item">
        {sortedList.map((todo) => {
          return (
            todo.isDone && (
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
            )
          );
        })}
      </div>
    </div>
  );
};

export default Card;
