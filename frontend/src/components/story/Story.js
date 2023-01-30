import React from "react";
// import Form from "../Form"

export default function Story({ story, setCurrentID }) {
  return (
    <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
      <a href="#" className="block w-full h-full">
        <img id='image'
          // alt="./images/Brule.jpg"
          // src={story.selectedFile}
          className="object-cover w-full max-h-40"
        />
        <div className="w-full p-4 bg-white dark:bg-gray-800">
          {/* <p className="font-medium text-indigo-500 text-md">{`${story.name}`}</p> */}
          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
            Memories of Grandma
          </p>
        </div>
      </a>
    </div>
  );
}
