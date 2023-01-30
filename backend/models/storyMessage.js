import mongoose from 'mongoose'

const storySchema = mongoose.Schema({
    name: String,
    story: String,
    selectedFile: File,
});

const StoryMessage = mongoose.model('storyMessage', storySchema);

export default StoryMessage;
