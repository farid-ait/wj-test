import React, { useEffect, useState } from 'react';
import { getStory } from '../services/api';
import { CommentsContainer } from '../components/CommentsContainer';
import moment from 'moment';


export const Story = ({ storyId }) => {
    const [story, setStory] = useState([]);
    
    useEffect(() => {
        getStory(storyId).then(data => data.url && setStory(data));
    }, []);

    return story && story.url ? (
        <>
            <h2><a href={story.url}>{story.title}</a></h2>
            {story.score} points by {story.by} {moment.unix(story.time).fromNow()}
            <CommentsContainer key={storyId} commentsIds={story.kids} count='20' />
        </>
    ) : null;
};