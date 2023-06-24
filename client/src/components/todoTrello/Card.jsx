import React from "react";
import { useState, useEffect, useRef } from 'react'


const Card = ({ children }) => {
  const [tasks, setTasks] = useState([children])
  const taskRef = useRef()
  const [editing, setEditing] = useState(false)
  const [showdDeleteButton, setShowDeleteButtion] = useState(false)
  
  const handleDoubleClick = () => {
    setEditing(true)
  }
  const handleBlur = () => {
    setEditing(false)
  }
  const handleChange = async(taskId) => {
    const newTitle = taskRef.current.value
    const updatedTask = await tasks.map((task) => {
      if (task.id === taskId){
        task.title = newTitle
      }
    })
    try{
      let res = await fetch("/api/thread/createThread", {
        method: "POST",
        headers: {
                   'Content-Type': 'application/json'
                 },
        body: JSON.stringify({
          id: taskId,
          title: newTitle
        })
      })
      let resJson = await res.json()
      if (res.status ===200) {
        console.log("User can register new todo.")
      }
    }catch(err){
      console.log(err)
    }

    // setTasks((task) => {
    //   if(task.id === taskId){
    //     return {...task, title:newTitle}
    //   }
    //   return task
    // }
  }
  const showMouseDelete = (event) => {
    const rect = event.target.getBoundingClientRect();
    const { clientX, clientY } = event;
    const isInTopRight =
      clientX >= rect.right - 50 && clientY <= rect.top + 100;

    setShowDeleteButtion(isInTopRight);
  }
  const leaveMouseDelete = () => {
    setShowDeleteButtion(false)
  }

  const deleteCard = () => {

  }

  return (
    <div
      className="card"
      onDoubleClick={handleDoubleClick}
      onMouseEnter={showMouseDelete}
      onMouseLeave={leaveMouseDelete}
    >
      {showdDeleteButton && (
        <button className="delete-button" onClick={deleteCard}>-</button>
      )}
      {editing ? (
        <input
          type="text"
          className="name-input"
          placeholder="Enter the task"
          // value={children}
          onBlur={handleBlur}
          onChange={e => handleChange(children.id)}
          autoFocus
          ref={taskRef}
        />
      ) : (
        <span>{children.title}</span>
      )}
    </div>
  );
};

export default Card;