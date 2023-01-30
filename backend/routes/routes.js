import express from 'express';

import { getStories, createStory, updateStory } from'../controllers/stories.js'

const router = express.Router();

//http://localhost:5000/posts

router.get('/', getStories);
router.post('/', createStory);
router.patch('/:id', updateStory)

export default router;