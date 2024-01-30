import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Create = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Update existing task
      let updatedTasks = [...mainTask];
      updatedTasks[editIndex] = { title, desc };
      setMainTask(updatedTasks);
      setEditIndex(null);
    } else {
      // Add new task
      setMainTask([...mainTask, { title, desc }]);
    }
    // Reset form
    setTitle('');
    setDesc('');
    toggle(); // Close the modal after adding/updating task
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);  // modified array, effectively removing the task at the specified index.
  };

  const editHandler = (i) => {
    // Set the task data in the form for editing
    const taskToEdit = mainTask[i];
    setTitle(taskToEdit.title);
    setDesc(taskToEdit.desc);
    setEditIndex(i);
    toggle(); // Open the modal for editing
  };

  const colors = [
    { primaryColor: '#5D93E1', secondaryColor: '#ECF3FC' },
    { primaryColor: '#F9D288', secondaryColor: '#FEFAF1' },
    { primaryColor: '#5DC250', secondaryColor: '#F2FAF1' },
    { primaryColor: '#F48687', secondaryColor: '#FDF1F1' },
    { primaryColor: '#B964F7', secondaryColor: '#F3F0FD' },
  ];


  let renderTask = <h2 className='ms-5'>No Task Available</h2>;

  // Fetch data
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <div key={i} className='card-hover card-wrapper mr-5'>
          <div className='card-top' style={{ backgroundColor: colors[i % 5].primaryColor }}></div>
          <div className='task-holder'>
            <span
              className='card-header'
              style={{ backgroundColor: colors[i % 5].secondaryColor, borderRadius: '10px' }}
            >
              {t.title}
            </span>
            <p className='mt-3'>{t.desc}</p>

            <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
              <i
                className='far fa-edit me-2'
                style={{ color: colors[i % 5].primaryColor, cursor: 'pointer' }}
                onClick={() => editHandler(i)}
              ></i>
              <i
                className='fas fa-trash-alt'
                style={{ color: colors[i % 5].primaryColor, cursor: 'pointer' }}
                onClick={() => deleteHandler(i)}
              ></i>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className='todo-container'>
      <div className='header'>
        <h1 className='todo-title text-center'>Todo List</h1>

        <Button
          style={{ marginLeft: '45%' }}
          onClick={toggle} className='todo-button todo-add-button'>
          Add Task
        </Button>
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {editIndex !== null ? 'Edit Task' : 'Add Task'}
        </ModalHeader>

        <ModalBody>
          <form onSubmit={submitHandler} className='todo-form px-2'>
            <label>Title:</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className='todo-input'
            />
            <label>Description:</label>
            <input
              type='text'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
              className='todo-input'
            />
            <Button color='primary' className='mt-3 mb-4'>
              {editIndex !== null ? 'Update Task' : 'Add Task'}
            </Button>
          </form>
        </ModalBody>
      </Modal>

      <hr />

      <div className='todo-list'>{renderTask}</div>
    </div>
  );
};

export default Create;
