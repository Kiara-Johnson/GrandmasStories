import React from 'react'
import Stories from './components/Stories'
import Form from './components/Form'

import mainPic from './images/Grandma.jpg'

export default function App() {
  return (
    <div>
        <div className='flex header'>
        <img className='imgTop' src={mainPic} alt='Toots'  />
        <h1 className="text-3xl font-bold underline">Grandma's Stories</h1>
        <div>
        <Stories />
        <Form />
        </div>
        </div>
    </div>
  )
}
