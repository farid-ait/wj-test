import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const topStoriesUrl = `${baseUrl}topstories.json`; 
export const StoryUrl =  `${baseUrl}item/`;
export const CommentUrl = `${baseUrl}item/`;
export const nbOfStories = 10;
export const nbOfComments = 20;

export interface CommentType {
    by: string,
    id: number,
    text: string,
    time: number,
    deleted: boolean,
    kids: []
}

export interface StoryType {
    by: string,
    id: number,
    title: string,
    commentIds: number[]
    time: number,
    score: number,
    url: string,
    kids: []
}

export const getStoryIds = async (): Promise<number[]> => {
    const result = await axios
        .get(topStoriesUrl)
        .then(({ data }) => data.slice(0, nbOfStories));

    return result;
}

export const getStory = async(storyId : number): Promise<StoryType> => {
    const result = await axios
        .get( `${StoryUrl  + storyId}.json`)
        .then(({ data }) => data);

    return result;
}

export const getComment = async(commentId: number): Promise<CommentType> => {
    const result = await axios
        .get( `${CommentUrl  + commentId}.json`)
        .then(({ data }) => data);

    return result;
}