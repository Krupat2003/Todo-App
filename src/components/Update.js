// // Import React and other necessary dependencies
// import React, { useState } from 'react';
// // import './app.css'; // Import the CSS file
// // import './App.css';


// const Create = () => {
//   const [title, setTitle] = useState('');
//   const [desc, setDesc] = useState('');
//   const [mainTask, setMainTask] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     if (editIndex !== null) {
//       // Update existing task
//       let updatedTasks = [...mainTask];
//       updatedTasks[editIndex] = { title, desc };
//       setMainTask(updatedTasks);
//       setEditIndex(null);
//     } else {
//       // Add new task
//       setMainTask([...mainTask, { title, desc }]);
//     }

//     // Reset form
//     setTitle('');
//     setDesc('');
//   };

//   const deleteHandler = (i) => {
//     let copyTask = [...mainTask];
//     copyTask.splice(i, 1);
//     setMainTask(copyTask);
//   };

//   const editHandler = (i) => {
//     // Set the task data in the form for editing
//     const taskToEdit = mainTask[i];
//     setTitle(taskToEdit.title);
//     setDesc(taskToEdit.desc);
//     setEditIndex(i);
//   };

//   let renderTask = <h2>No Task Available</h2>;

//   if (mainTask.length > 0) {
//     renderTask = mainTask.map((t, i) => {
//       return (
//         <li key={i} className='todo-task'>
//           <div>
//             <h5 className='text-lg font-medium'>{t.title}</h5>
//             <p className='text-gray-600'>{t.desc}</p>
//           </div>
//           <div className='todo-task-buttons'>
//             <button
//               onClick={() => editHandler(i)}
//               className='todo-button todo-edit-button'
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => deleteHandler(i)}
//               className='todo-button todo-delete-button'
//             >
//               Delete
//             </button>
//           </div>
//         </li>
//       );
//     });
//   }

//   return (
//     <div className='todo-container'>
//       <h1 className='todo-title'>Todo List</h1>

//       <form onSubmit={submitHandler} className='todo-form'>
//         <input
//           type='text'
//           placeholder='Enter Task here'
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className='todo-input'
//           required
//         />
//         <input
//           type='text'
//           placeholder='Enter Description here'
//           value={desc}
//           onChange={(e) => setDesc(e.target.value)}
//           className='todo-input'
//           required
//         />
//         <button className='todo-button'>
//           {editIndex !== null ? 'Update Task' : 'Add Task'}
//         </button>
//       </form>
//       <hr />

//       <div className='todo-list'>
//         <ul>{renderTask}</ul>
//       </div>
//     </div>
//   );
// };

// export default Create;
