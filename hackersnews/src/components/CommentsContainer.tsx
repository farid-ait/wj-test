import React, { useEffect, useState } from 'react';
import { Comment } from './Comment';
import { nbOfComments } from '../services/api';

interface CommentsProps {
  commentsIds: number[]
}

export const CommentsContainer: React.FC<CommentsProps> = (props:CommentsProps) => {
    const [comments, setCommentsIds] = useState<number[]>();
    const [showComments, setShowComments] = useState<boolean>(false);
   
    useEffect(() => {
        setCommentsIds(props.commentsIds && props.commentsIds.slice(0, nbOfComments));
    }, [showComments]);

    const onToggle = () => {
      setShowComments(!showComments);
    } 

    return comments && comments.length ? (
      <> 
        <button onClick={onToggle}> {showComments ? 'Hide Comments' : 'Show Comments'} </button>
        <ul>
          { showComments ?  comments.map(commentId => (<Comment key={commentId} commentId={commentId} />)) : null } 
        </ul>
      </>
    ) : null ;
  
};