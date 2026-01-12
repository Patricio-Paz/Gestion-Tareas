function TaskList({ tasks, onDelete, onSelect, onToggle }) {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`list-group-item d-flex justify-content-between align-items-start ${
            task.completed ? "list-group-item-success" : ""
          }`}
        >
          <div>
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={task.completed}
              onChange={() => onToggle(task)}
            />

            <strong
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </strong>

            <p className="mb-1 text-muted">{task.description}</p>
          </div>

          <div>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => onSelect(task)}
            >
              Editar
            </button>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(task.id)}
            >
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
