import React from 'react'
import Edit from "../../img/edit.jpg"
import Delete from "../../img/delete.jpg"
import {Link} from "react-router-dom"

const Post = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://image.yodobashi.com/product/100/000/009/002/024/852/100000009002024852_10204_002.jpg" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>Fuma</span>
            <p>Posted yesterday</p>
          </div>
        <div className="edit">
          <Link to={`/blog/write?edit=2`}>
          <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" />
        </div>
        </div>
        <h1>This is the first post</h1>
        <p>
        突然現れた不思議な花が道路の脇に咲いていた。その花は紫色で、小さな星のような模様が施されていた。人々はその美しさに驚き、カメラを取り出して写真を撮り始めた。しかし、不思議なことに、写真を撮った瞬間に花は消えてしまった。それからというもの、その花の噂が広がり、多くの人々がその姿を見ようと道端に集まっていった。けれども、その花は二度と姿を現さず、人々はその美しさを心に刻みながら、また次の不思議な出来事を待ちわびるのであった。





        </p>
      </div>
    </div>
  )
}

export default Post
