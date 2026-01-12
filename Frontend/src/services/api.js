const API_URL = "http://127.0.0.1:8000/api/tasks/";

export const getTasks = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createTask = async (task) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const deleteTask = async (id) => {
  await fetch(`${API_URL}${id}/`, {
    method: "DELETE",
  });
};

export const updateTask = async (id, updatedData) => {
  const response = await fetch(`${API_URL}${id}/`, {
    method: "PATCH", // o PUT
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  return response.json();
};

export const toggleTaskCompleted = async (id, completed) => {
  const response = await fetch(`${API_URL}${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text);
  }

  return response.json();
};
