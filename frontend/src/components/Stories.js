import React from "react";
import { useSelector } from "react-redux";

import Story from "./story/Story";

export default function Stories({setCurrentId}) {
  const stories = useSelector((state) => state.story);

  return (
    <div className="@container">
      {stories.map((story) => (
        <div className="@container" key={story._id}>
          <Story story={story} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
}
