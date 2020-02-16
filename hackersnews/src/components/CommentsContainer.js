import React, { useEffect, useState } from 'react';
import { Comment } from '../components/Comment';
import { nbOfComments } from '../services/api';

export const CommentsContainer = ({ commentsIds }) => {
    const [comments, setCommentsIds] = useState([]);
   
    useEffect(() => {
        setCommentsIds(commentsIds && commentsIds.slice(0, nbOfComments));
    }, []);

    return comments && comments.length ?  (
    <> 
      <p>Comments: </p>
      <ul>
        {comments.map(commentId => (
         <Comment key={commentId} commentId={commentId} />
      ))} 
      
      </ul>
    </>
    ) : ( <p>No comments</p> );
};