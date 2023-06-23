import React from "react";
import { useState } from "react";

const Card = ({ children }) => {
  const [name, setName] = useState()
  const [editing, setEditing] = useState(false)
  const [showdDeleteButton, setShowDeleteButtion] = useState(false)
  
  const handleDoubleClick = () => {
    setEditing(true)
  }
  const handleBlur = () => {
    setEditing(false)
  }
  const handleChange = (e) => {
    setName(e.target.value)
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
          onChange={handleChange}
          autoFocus
        />
      ) : (
        <span>{children}</span>
      )}
    </div>
  );
};

export default Card;