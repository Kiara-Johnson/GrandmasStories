import axios from "axios";

const url = "http://localhost:5000/stories";

export const fetchStories = () => axios.get(url);
export const createStory = (newStory) => axios.story(url, newStory);
