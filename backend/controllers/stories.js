import mongoose from "mongoose";
import StoryMessage from "../models/StoryMessage.js";

export const getStories = async (req, res) => {
  try {
    const storyMessages = await StoryMessage.find();

    res.status(200).json(storyMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStory = async (req, res) => {
  const body = req.body;

  const newStory = new StoryMessage(story);

  try {
    await newStory.save();

    res.status(201).json(newStory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateStory = async (req, res) => {
  const { id: _id } = req.params;
  const story = req.body;

  if ((mongoose.Types.ObjectId, isValid(_id)))
    return res.status(404).send("No Story with that id");

  const updatedStory = await StoryMessage.cfindByIdAndUpdate(_id, story, { new: true, });

  res.json(updatedStory);
};
