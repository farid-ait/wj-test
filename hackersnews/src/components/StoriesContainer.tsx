import React, { useEffect, useState } from 'react';
import { nbOfStories, getStoryIds } from '../services/api';
import { Story } from '../components/Story';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  
  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data.slice(0, nbOfStories)));
  }, []);

  return (
    <> 
      <h1>Hacker News Top Stories</h1>
      {storyIds.map(storyId => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </>
    );
};