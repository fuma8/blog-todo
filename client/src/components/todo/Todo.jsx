import React from 'react'
import "./todo.css"
import { useState, useEffect, useRef } from 'react'


const Todo = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch("/api/thread", {method: 'GET'}).then(
      response => response.json()
    ).then(
      data => {
        setTodos(data)
      }
    )
  }, [])

  const titleRef = useRef()
  const contentRef = useRef()


  const handleTodo = async(e) => {
    e.preventDefault()
    const titleValue = titleRef.current.value
    const contentValue = contentRef.current.value
    setTodos((todos) => {
      return [...todos, {title:titleValue, content:contentValue}]
    })
    try{
      let res = await fetch("/api/thread/createThread", {
        method: "POST",
        headers: {
                   'Content-Type': 'application/json'
                 },
        body: JSON.stringify({
          title: titleValue,
          content: contentValue
        })
      })
      let resJson = await res.json()
      if (res.status ===200) {
        console.log("User can register new todo.")
      }
    }catch(err){
      console.log(err)
    }
    titleRef.current.value = null
    contentRef.current.value = null
  }

  const handleTodoDelete = async(index, id) => {
    const currentTodos = [...todos]
    try{
      let res = await fetch(`/api/thread/deleteThread/${id}`, {
        method: "delete"
      }).then(
        response => response.json()
      ).then(
        currentTodos.splice(index, 1)
      )
      if (res.status === 200) {
        console.log("User can delete todo.")
      }
    }catch(err){
      console.log(err)
    }
    setTodos(currentTodos)
  }

  return (
    <div className="App">
        {
            todos.map((todo, index) => 
            <div className="Thread-secton">
              <h3 key={index}>{index+1}&nbsp;{todo.title}</h3>
              <p key={index}>{todo.content}</p>
              {/* <button className='update-item'>Update</button> */}
              <button className='delete-item' key={index} onClick={() => handleTodoDelete(index, todo._id)}>Delete</button>
            </div>
            )
        }
      <form className="form-section">
         <p>Title</p>
         <input id = "title, "type="text" placeholder="Title" ref={titleRef}/>
         <p>Content</p>
         <textarea id="content" rows="10" cols="30" ref={contentRef}></textarea>
         <br />
         <button id="submitButton" type="submit" onClick={handleTodo}>Send</button>
       </form>
    </div>
  )
}


export default Todo
