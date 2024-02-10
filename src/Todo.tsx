export default function Todo({ todo }: { todo: string }) {
  return (
    <li className="text-white flex">
      <div className="flex min-w-64 justify-start gap-6 border-b items-center">
        <input type="checkbox" />
        <span>{todo}</span>
      </div>
      <button className="border border-white px-4">X</button>
    </li>
  );
}
