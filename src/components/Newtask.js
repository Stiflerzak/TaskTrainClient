import React, { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const NewTaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('To Do');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, deadline, status, priority });
    setTitle('');
    setDescription('');
    setDeadline('');
    setStatus('To Do');
    setPriority('Low');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="title">Title:</Label>
      <Input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <Label htmlFor="description">Description:</Label>
      <Textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required></Textarea>

      <Label htmlFor="deadline">Deadline:</Label>
      <Input type="date" id="deadline" name="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />

      <Label htmlFor="status">Status:</Label>
      <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <Label htmlFor="priority">Priority:</Label>
      <select id="priority" name="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default NewTaskForm;
