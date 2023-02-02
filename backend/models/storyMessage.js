import mongoose from 'mongoose'

const storySchema = mongoose.Schema({
    creatorName: String,
    story: String,
    // selectedFile: String,
});

const StoryMessage = mongoose.model('storyMessage', storySchema);

export default StoryMessage;
