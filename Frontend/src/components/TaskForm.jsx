import { useEffect, useState } from "react";
import { createTask, updateTask } from "../services/api";

function TaskForm({ selectedTask, onTaskCreated, onTaskUpdated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
    }
  }, [selectedTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (selectedTask) {
      await updateTask(selectedTask.id, {
        title,
        description,
        completed: selectedTask.completed,
      });
      onTaskUpdated();
    } else {
      await createTask({
        title,
        description,
        completed: false,
      });
      onTaskCreated();
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <input
          className="form-control"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <textarea
          className="form-control"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button className="btn btn-primary w-100">
        {selectedTask ? "Actualizar tarea" : "Agregar tarea"}
      </button>
    </form>
  );
}

export default TaskForm;
