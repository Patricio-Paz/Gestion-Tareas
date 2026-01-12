function TaskDetail({ task, onSave }) {
  const [description, setDescription] = useState(task.description);
  const [completed, setCompleted] = useState(task.completed);

  const handleSubmit = () => {
    onSave(task.id, {
      description,
      completed
    });
  };

  return (
    <div className="card mt-3 p-3">
      <h5>{task.title}</h5>

      <textarea
        className="form-control mb-2"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <button
        className={`btn ${completed ? 'btn-success' : 'btn-secondary'}`}
        onClick={() => setCompleted(!completed)}
      >
        {completed ? 'Completada' : 'Incompleta'}
      </button>

      <button
        className="btn btn-primary mt-2"
        onClick={handleSubmit}
      >
        Guardar cambios
      </button>
    </div>
  );
}
export default TaskDetail
