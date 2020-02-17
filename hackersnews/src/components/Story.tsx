import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { StoryType, getStory } from '../services/api';
import { CommentsContainer } from './CommentsContainer';
import { StorySection, StoryTitle, StoryMeta } from '../styles/StoryStyle'

  
export interface StoryProps {
    storyId: number;
}

export const Story: React.FC<StoryProps> = (props:StoryProps) => {
    const [story, setStory] = useState<StoryType>();
    
    useEffect(() => {
        getStory(props.storyId).then(data => data.url && setStory(data));
    }, []);

    return story && story.url ? (
        <StorySection>
            <StoryTitle>
                <a href={story.url}>{story.title}</a>
            </StoryTitle>
            <StoryMeta>
                {story.score} points by {story.by} {moment.unix(story.time).fromNow()}
            </StoryMeta>
            <CommentsContainer key={props.storyId} commentsIds={story.kids} />
        </StorySection>
    ) : null;
};