import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  const displayTaskData = tasks.map((task, i) => {
    return (
      <Task
        key={i}
        text={task.text}
        category={task.category}
        handleDelete={() => handleDelete(task.text)}
      />
    );
  });

  return <div className="tasks">{displayTaskData}</div>;
}

export default TaskList;
