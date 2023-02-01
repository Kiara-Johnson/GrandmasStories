import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchStories = () => axios.get(url);
export const createStory = (newStory) => axios.story(url, newStory);
