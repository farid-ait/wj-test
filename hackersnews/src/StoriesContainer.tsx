import React, { useEffect, useState } from 'react';
import { nbOfStories, getStoryIds } from './api';


export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  
  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data.slice(0, nbOfStories)));
  }, []);

  return (
    <> 
      <h1>Hacker News Top Stories</h1>
      {JSON.stringify(storyIds)}
    </>
    );
};