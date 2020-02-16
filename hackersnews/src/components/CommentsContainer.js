import React, { useEffect, useState } from 'react';
import { Comment } from '../components/Comment';
import { nbOfComments } from '../services/api';

export const CommentsContainer = ({ commentsIds }) => {
    const [comments, setCommentsIds] = useState([]);
    const [showComments, setShowComments] = useState(false);
   
    useEffect(() => {
        setCommentsIds(commentsIds && commentsIds.slice(0, nbOfComments));
    }, [showComments]);

    const ontoggle = () => {
      setShowComments(!showComments);
    } 

    return comments && comments.length ?  (
      <> 
        <button onClick={ontoggle}> {showComments ? 'Hide Comments' : 'Show Comments'} </button>
        <ul>
          { showComments ?  comments.map(commentId => (<Comment key={commentId} commentId={commentId} />)) : null } 
        </ul>
      </>
      ) : null ;
  
};