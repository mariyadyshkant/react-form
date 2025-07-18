// import { useState } from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button } from 'bootstrap';

function App() {
  const articles = [
    {
      id: '1',
      title: 'How to create a React form',
      content: 'In this article, we will learn how to create a form in React using controlled components.'
    },
    {
      id: '2',
      title: 'Understanding React Hooks',
      content: 'React Hooks are functions that let you use state and other React features without writing a class.'
    },
    {
      id: '3',
      title: 'Styling in React',
      content: 'There are several ways to style React components, including inline styles, CSS modules, and styled-components.'
    },
    {
      id: '4',
      title: 'React Router Basics',
      content: 'React Router is a library for routing in React applications, allowing you to create single-page applications with navigation.'
    },
    {
      id: '5',
      title: 'State Management in React',
      content: 'State management is crucial in React applications, and there are various libraries like Redux and Context API to help with this.'
    }
  ]

  return (
    <>
      <div className='container'>
        <h1 className='text-white text-center py-3 rounded-2'>React Blog Form</h1>
        {articles.map(article => (
          <div key={article.id}>
            <ul className='list-group'>
              <li className='list-group-item list-group-item'>
                {article.title}
              </li>
              <button id='btn-trash' className='btn btn-light'><i className="bi bi-trash"></i></button>
            </ul>
          </div>
        ))}
        <form action="" className='d-flex'>
          <input id='input' type="text" placeholder="New article" className='form-control bg-light py-2' />
          <button id='btn-add' type="submit" className='btn btn-success'><span className='btn-text'>Add </span><i className="bi bi-plus-square fw-bold"></i>
          </button>
        </form>
      </div>
    </>
  )
}

export default App
