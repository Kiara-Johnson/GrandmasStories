import React from "react";
import Story from "./story/Story";

export default function Stories(story) {
    // const stories = useSelector((state) => state.stories);
  return (
    <div>
        <Story />
        <Story />
    </div>
    // stories.length (
    //       {story.map((story) => (
    //         {story._id}
    //           <Story story={story} />
    //       ))}
    //   )

  );
}
