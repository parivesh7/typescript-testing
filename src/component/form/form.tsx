// import { AddTaskFunction } from "../../App";
import { useRef } from "react";
import "./form.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTask: (e: React.SyntheticEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, addTask }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="form-wrapper"
      onSubmit={(e) => {
        addTask(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        placeholder="Please enter the task details in brief..."
        name="input"
        className="input-f"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="submit-btn" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
