import React from 'react';

export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {
    /*const task = [
        {id: 1001, name: "Task A", time: "2:09:01 AM 9/14/2030" },
        {id: 1002, name: "Task B", time: "2:09:01 AM 9/14/2030" },
        {id: 1003, name: "Task C", time: "2:09:01 AM 9/14/2030" }
    ]*/
   const handleEdit = (id) => {
    const selectdTask = tasklist.find(todo => todo.id === id);
    // console.log(selectdTask);
    setTask(selectdTask);
    
   }

   const handleDelete = (id) => {
    const updatedTasllist = tasklist.filter(todo => todo.id !== id);
    setTasklist(updatedTasllist);

   }
  return (
   <section className='showTask'>
    <div className='head'>
        <div>
            <span className='title'>Todo</span>
            <span className='count'>{tasklist.length}</span>
        </div>

        <button className='clearAll' onClick={() => setTasklist([])}>clear All</button>
    </div>

    <ul>

        { tasklist.map((todo) =>(
            <li key={todo.id}>
                <p>
                    <span className='name'>{todo.name}</span>
                    <span className='time'>{todo.time}</span>
                </p>
                <i className='bi bi-pencil-square' onClick={() => handleEdit(todo.id)}></i>
                <i className='bi bi-trash' onClick={() => handleDelete(todo.id)}></i>
            </li>

        ))}
        
    </ul>

   </section>
  )
}
