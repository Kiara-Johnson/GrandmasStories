import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/actions";

import Stories from './components/Stories'
import Form from './components/Form'
import mainPic from './images/Grandma.jpg'
import './index.css';

export default function App() {
  const {currentId, setCurrentId} = useState(null);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);
console.log('hello world')
  return (
    <div>
        <div className='flex header'>
        <img className='imgTop' src={mainPic} alt='Toots'  />
        <h1 className="text-3xl font-bold underline">Grandma's Stories</h1>
        <div>
        <Stories setCurrentId={setCurrentId} />
        <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
        </div>
    </div>
  )
}
