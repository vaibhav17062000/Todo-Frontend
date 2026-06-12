import React, { useState } from "react";

function Todos() {
  const [tasks, setTasks] = useState("");
  const [todos, setTodos] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const submitTasks = async () => {
    if (!tasks.trim()) return;

    try {
      // UPDATE
      if (isEditing) {
        const res = await fetch(
          `http://localhost:8080/api/tasks/${editId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              tasks: tasks,
            }),
          }
        );

        const updatedTodo = await res.json();

        setTodos(
          todos.map((todo) =>
            todo.id === editId ? updatedTodo : todo
          )
        );

        setIsEditing(false);
        setEditId(null);
      }
      // CREATE
      else {
        const res = await fetch("http://localhost:8080/api/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tasks: tasks,
          }),
        });

        const data = await res.json();

        setTodos([...todos, data]);
      }

      setTasks("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const startEditing = (todo) => {
    setTasks(todo.tasks);
    setEditId(todo.id);
    setIsEditing(true);
  };
  const deleteTask = async (id) => {
  try {
    await fetch(`http://localhost:8080/api/tasks/${id}`, {
      method: "DELETE",
    });

    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex justify-center items-center px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          📝 My Todo List
        </h1>

        <div className="flex gap-3 mb-8">
          <input
            type="text"
            placeholder="Enter a task..."
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={submitTasks}
            className={`text-white font-semibold px-6 py-3 rounded-xl transition duration-300 ${
              isEditing
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isEditing ? "Update" : "Add"}
          </button>
        </div>

        {todos.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No tasks added yet 🚀
          </div>
        ) : (
          <ul className="space-y-4">
            {todos.map((item) => (
              <li
                key={item.id}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">
                    {item.tasks}
                  </span>

                  <span className="bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => startEditing(item)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-xl transition duration-300"
                  >
                    Update
                  </button>

                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-xl transition duration-300" onClick={()=>deleteTask(item.id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Todos;