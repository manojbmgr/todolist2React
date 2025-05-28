import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Navbar } from 'react-bootstrap';
const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasksData, setTasksData] = useState([]);
  const addTask = () => {
    if (task.trim()) {
      setTasksData([...tasksData, task]);
      setTask('');
    }
  };
  const deleteTask = (index) => {
    const updatedTasks = tasksData.filter((_, i) => i !== index);
    setTasksData(updatedTasks);
  };
  return (
    <Container>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Navbar.Brand className="mx-auto">To-Do App</Navbar.Brand>
      </Navbar>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form.Group className="d-flex">
            <Form.Control
              type="text"
              placeholder="Add a task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
            <Button variant="primary" className="ms-2" onClick={addTask}>
              Add
            </Button>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-4">
        <Col md={6}>
          <ListGroup>
            {tasksData.map((t, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between">
                {t}
                <Button variant="danger" size="sm" onClick={() => deleteTask(index)}>
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default TodoApp;
