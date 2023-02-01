import React from "react";

import Story from "./story/Story";

export default function Stories(story) {
    // const stories = useSelector((state) => state.story);
  return (
    !stories.length ? <CircularProgress /> : (
      <Grid className='grid-cols-3'>
        {stories.map((story) => (
          <Grid key={story._id} item xs={12} sm={6}>
            <Story story={story} />
          </Grid>
        ))}
      </Grid>
      )
  )
}
