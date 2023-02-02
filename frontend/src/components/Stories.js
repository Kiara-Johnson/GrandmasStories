import React from "react";
import { useSelector } from "react-redux";

import Story from "./story/Story";

export default function Stories(story) {
    const stories = useSelector((state) => state.story);

    console.log(story)
  return (
      <div className='@container'>
        {stories.map((story) => (
          <div className='@container'>
         {story._id}
            <Story story={story} />
            </div>
        ))}
   </div>
      )
    }
