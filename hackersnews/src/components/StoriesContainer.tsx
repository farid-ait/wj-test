import React, { useEffect, useState } from 'react';
import { nbOfStories, getStoryIds } from '../services/api';
import { Story } from './Story';


export const StoriesContainer: React.FC = () => {

  const [storyIds, setStoryIds] = useState<number[]>();
  
  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data.slice(0, nbOfStories)));
  }, []);

  return storyIds ? (
    <> 
      <h1>Hacker News Top Stories</h1>
      {storyIds.map(storyId => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </>
  ) : null;
};