import React from "react";
import Task from "./Task";

function TaskList({ tasks, categoryFilter, onTaskDelete }) {
  const filteredTasks =
    categoryFilter === "All" ? tasks : tasks.filter((task) => task.category === categoryFilter);

  return (
    <div className="tasks">
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onTaskDelete} />
      ))}
    </div>
  );
}

export default TaskList;
