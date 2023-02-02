import axios from "axios";

const url = "https://mern-stories-backend.onrender.com";

export const fetchStories = () => axios.get(url);
export const createStory = (newStory) => axios.story(url, newStory);
export const updateStory = (id, updatedStory) => axios.patch(`${url}/${id}`, updatedStory);
export const deleteStory = (id) => axios.delete(`${url}/${id}`);