// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Header from "./components/header/Header"
import Todo from "./components/todo/Todo"
import Blog from "./components/blog/Blog"
import Login from "./components/blog/Login"
import Register from "./components/blog/Register"
import Post from "./components/blog/Post"
import Write from "./components/blog/Write"

const Layout = () => {
  return(
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/todo",
        element:<Todo/> 
      },
      {
        path: "/blog",
        element:<Blog/> 
      },
      {
        path: "/blog/post/:id",
        element:<Post/> 
      },
      {
        path: "/blog/write",
        element:<Write/> 
      },
    ]
  },
  {
    path: "/blog/register",
    element:<Register/> 
  },
  {
    path: "/blog/login",
    element:<Login/> 
  },
])

function App() {
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )
  // return (
  //   <BrowserRouter>
  //   <Header />
  //     <Routes>
  //       <Route path="/todo" element={<Todo/>}></Route>
  //       <Route path="/blog" element={<Blog/>}></Route>
  //       <Route path="/blog/login" element={<Login/>}></Route>
  //       <Route path="/blog/register" element={<Register/>}></Route>
  //     </Routes>
  //   </BrowserRouter>

  // );
}

export default App;
