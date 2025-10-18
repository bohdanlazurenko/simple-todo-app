"use client";

import { Todo } from '@/types/todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-500 py-8">
        No todos yet. Add one above!
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm border border-gray-200"
        >
          <div className="flex items-center gap-3 flex-grow">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span
              className={`flex-grow ${
                todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
              }`}
            >
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => onDelete(todo.id)}
            className="ml-4 px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}