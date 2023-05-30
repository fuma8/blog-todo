import React, { useState } from 'react'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

const Write = () => {
  const [value, setValue] = useState('')
  console.log(value)
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editContainer">
          <ReactQuill theme='snow' />
        </div>
      </div>
      <div className="menu">
      <div className="item">
        <h1>Publish</h1>
        <span>
          <b>Status:</b> Draft
        </span>
        <input type="file"  />
        <div className="buttons">
          <button>Save</button>
          <button>No meaning</button>

          <button>Update</button>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Write
