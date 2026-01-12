import { useEffect, useState } from "react";
import { getTasks, deleteTask,toggleTaskCompleted } from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/taskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleToggleCompleted = async (task) => {
  await toggleTaskCompleted(task.id, !task.completed);
  loadTasks();
};

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">📝 Gestor de Tareas</h1>

      <div className="card shadow p-4">
        <TaskForm
          selectedTask={selectedTask}
          onTaskCreated={loadTasks}
          onTaskUpdated={() => {
            setSelectedTask(null);
            loadTasks();
          }}
        />
      </div>

      <div className="mt-4">
        <TaskList
          tasks={tasks}
          onDelete={handleDelete}
          onSelect={setSelectedTask}
          onToggle={handleToggleCompleted}
        />
      </div>
    </div>
  );
}

export default App;
