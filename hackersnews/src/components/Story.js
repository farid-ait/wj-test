import React, { useEffect, useState } from 'react';
import { getStory } from '../services/api';

export const Story = ({ storyId }) => {
    const [story, setStory] = useState([]);
    
    useEffect(() => {
        getStory(storyId).then(data => data.url && setStory(data));
    },[storyId]);

    return story && story.url ? (
        <>
            <h2><a href={story.url}>{story.title}</a></h2>
            {story.score} points by {story.by} {story.time}
        </>
    ) : null;
};