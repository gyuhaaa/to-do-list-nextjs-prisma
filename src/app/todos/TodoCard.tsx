import { Todo } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

interface TodoCardProps {
  todo: Todo;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export default function TodoCard({ todo, todos, setTodos }: TodoCardProps) {
  const deleteTodo = async () => {
    try {
      const res = await fetch(`/api/todos/${todo.id}`, {
        method: "DELETE",
      });
      const json = await res.json();

      if (json.success) {
        setTodos(todos.filter((v) => v.id !== todo.id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li>
      <span>{todo.content}</span>
      <button onClick={() => deleteTodo()}>삭제</button>
    </li>
  );
}
