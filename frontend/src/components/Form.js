import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import { createStory } from '../actions/actions'

export default function Form() {
  const [storyData, setStoryData] = useState({
    creator: "",
    story: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefaule();

    dispatch(createStory(storyData));
  };

  const clear = () => {};

  return (
    <div>
      <form className="flex w-full max-w-sm space-x-3">
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Add Your Story!
          </div>
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  id="name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Name"
                  value={storyData.name}
                  onChange={(e) =>
                    setStoryData({ ...storyData, name: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="col-span-2">
              <label className="text-gray-700" for="name">
                <textarea
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  id="story"
                  placeholder="Enter your story"
                  name="story"
                  rows="5"
                  cols="40"
                  value={storyData.story}
                  onChange={(e) =>
                    setStoryData({ ...storyData, story: e.target.value })
                  }
                ></textarea>
              </label>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <FileBase
                  type="file"
                  id="selectedFile"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="image"
                  onDone={({ base64 }) =>
                    setStoryData({ ...storyData, selectedFile: base64 })
                  }
                />
              </div>
            </div>
            <div className="col-span-2 text-right">
              <button
                type="submit"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={handleSubmit}
              >
                Submit Story
              </button>
              <button
                type="clear"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={clear}
              >
                Clear Story
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
