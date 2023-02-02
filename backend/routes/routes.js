import express from 'express';

import { getStories, getStory, createStory, updateStory, deleteStory } from'../controllers/stories.js'

const router = express.Router();



router.get('/', getStories);
router.post('/', createStory);
router.get('/:id', getStory);
router.patch('/:id', updateStory)
router.delete('/:id', deleteStory);

export default router;