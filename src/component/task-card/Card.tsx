import "./Card.css";
import { Todo } from "../helper/Types";

interface Props {
  todoList: Todo[];
}

const Card: React.FC<Props> = ({ todoList }) => {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <>
            <span>{todo.todo}</span>
            <br />
          </>
        );
      })}
    </div>
  );
};

export default Card;
