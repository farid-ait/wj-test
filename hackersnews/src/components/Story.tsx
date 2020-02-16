import React, { useEffect, useState } from 'react';
import { StoryType, getStory } from '../services/api';
import { CommentsContainer } from './CommentsContainer';
import moment from 'moment';

  
export interface StoryProps {
    storyId: number;
}

export const Story: React.FC<StoryProps> = (props:StoryProps) => {
    const [story, setStory] = useState<StoryType>();
    
    useEffect(() => {
        getStory(props.storyId).then(data => data.url && setStory(data));
    }, []);

    return story && story.url ? (
        <>
            <h2><a href={story.url}>{story.title}</a></h2>
            {story.score} points by {story.by} {moment.unix(story.time).fromNow()}
            <CommentsContainer key={props.storyId} commentsIds={story.kids} />
        </>
    ) : null;
};