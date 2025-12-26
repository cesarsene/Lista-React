import { useState } from "react";

export function TodoInput({ onAdd }: { onAdd: (text: string) => void }) {
  const [value, setValue] = useState("");

  function handleAdd() {
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  }

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="
          flex-1 px-4 py-2
          border border-gray-300 rounded-md
          focus:outline-none focus:ring-2 focus:ring-primary
        "
      />

      <button
        onClick={handleAdd}
        disabled={!value.trim()}
        className="
          bg-primary text-white px-4 py-2 rounded-md
          hover:opacity-90 transition
          disabled:opacity-50
        "
      >
        Adicionar
      </button>
    </div>
  );
}
