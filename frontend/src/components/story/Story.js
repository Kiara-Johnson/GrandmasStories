import React from "react";

export default function Story({ story }) {
  return (
    <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
      <a href="#" className="block w-full h-full">
       <div className='@container'>
          src={story.selectedFile}
         </div>
        <div className="w-full p-4 bg-white dark:bg-gray-800">
          <p className="font-medium text-indigo-500 text-md">{`${story.name}`}</p>
          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
            Memories of Grandma
          </p>
        </div>
      </a>
    </div>
  );
}
