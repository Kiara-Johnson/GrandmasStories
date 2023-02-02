import React from "react";
import { useDispatch } from 'react-redux';

import { deleteStory } from '../../actions/actions';

export default function Story({ story }) {
  const dispatch = useDispatch();

  return (
    <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
      {/* <a href="#" className="block w-full h-full"> */}
       {/* <div className='@container'> */}
       {/* <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={story.selectedFile} alt="" /> */}
       {/* <button onClick={() => setCurrentID(story._id)}>Edit</button>
         </div> */}
        <div className="w-full p-4 bg-white dark:bg-gray-800">
          <p className="font-medium text-indigo-500 text-md">{story.name}</p>
          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
          {story.story}
          </p>
          <button onClick={() => dispatch(deleteStory(story._id))}>Delete</button>
        </div>
      {/* </a> */}
    </div>
  );
}
