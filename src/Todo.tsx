export default function Todo({
  todo,
  toggleComplete,
  deleteTodo,
}: {
  todo: { text: string; id: string; completed: boolean };
  toggleComplete: (selectedTodo: {
    text: string;
    id: string;
    completed: boolean;
  }) => void;
  deleteTodo: (id: string) => void;
}) {
  return (
    <li
      className={`text-white flex
      ${todo.completed ? "line-through" : ""}
    `}
    >
      <div className="flex min-w-64 justify-start gap-6 border-b items-center">
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed}
        />
        <p onClick={() => toggleComplete(todo)}>{todo.text}</p>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="border border-white px-4"
      >
        X
      </button>
    </li>
  );
}
