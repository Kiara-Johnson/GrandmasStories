import express from "express";
import mongoose from "mongoose";
import StoryMessage from "../models/StoryMessage.js";

const router = express.Router();

export const getStories = async (req, res) => {
  try {
    const storyMessages = await StoryMessage.find();

    res.status(200).json(storyMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getStory = async (req, res) => {
  const { id } = req.params;

  try {
    const story = await StoryMessage.findById(id);

    res.status(200).json(story);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStory = async (req, res) => {
  const body = req.body;

  const newStoryMessage = new StoryMessage({ creatorName, story, selectedFile });

  try {
    await newStoryMessage.save();

    res.status(201).json(newStoryMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateStory = async (req, res) => {
  const { id } = req.params;
  const { creatorName, story, selectedFile } = req.body;

  if ((mongoose.Types.ObjectId.isValid(id)))
    return res.status(404).send(`No Story with id: ${id}`);

  const updatedStory = { creatorName, story, selectedFile, _id: id }
  await StoryMessage.findByIdAndUpdate(id, updatedStory, { new: true, });

  res.json(updatedStory);
};
export const deleteStory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No story with id: ${id}`);

  await StoryMessage.findByIdAndRemove(id);

  res.json({ message: "Story deleted successfully." });
}

export default router;