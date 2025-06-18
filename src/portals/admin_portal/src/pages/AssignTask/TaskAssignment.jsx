import React, { useState } from "react";
import "./TaskAssignment.css";

const TaskAssignment = () => {
  const [taskList, setTaskList] = useState([]);
  const [formData, setFormData] = useState({
    staffName: "",
    task: "",
    dueDate: "",
    priority: "Medium",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.staffName || !formData.task || !formData.dueDate) return;
    setTaskList((prev) => [...prev, formData]);
    setFormData({ staffName: "", task: "", dueDate: "", priority: "Medium" });
  };

  return (
    <div className="task-assignment-wrapper">
      <h2>📝 Assign Task to Staff</h2>

      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label>Staff Name:</label>
          <input
            type="text"
            name="staffName"
            value={formData.staffName}
            onChange={handleChange}
            placeholder="e.g., Dr. Ali or Nurse Sana"
          />
        </div>

        <div className="form-group">
          <label>Task Description:</label>
          <input
            type="text"
            name="task"
            value={formData.task}
            onChange={handleChange}
            placeholder="e.g., Update patient report"
          />
        </div>

        <div className="form-group">
          <label>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Priority:</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <button type="submit" className="assign-btn">Assign Task</button>
      </form>

      <div className="task-table-section">
        <h3>📋 Assigned Tasks</h3>
        {taskList.length === 0 ? (
          <p className="no-tasks">No tasks assigned yet.</p>
        ) : (
          <table className="task-table">
            <thead>
              <tr>
                <th>Staff</th>
                <th>Task</th>
                <th>Due Date</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {taskList.map((task, index) => (
                <tr key={index}>
                  <td>{task.staffName}</td>
                  <td>{task.task}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TaskAssignment;
