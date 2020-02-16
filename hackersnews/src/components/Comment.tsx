import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
import { CommentsContainer } from './CommentsContainer';
import { CommentType, getComment } from '../services/api';

interface CommentProps {
    commentId: number
}

export const Comment: React.FC<CommentProps> = (props:CommentProps) => {

    const [comment, setComment] = useState<CommentType>();
    
    useEffect(() => {
        getComment(props.commentId).then(data => data.id && setComment(data));
       
    }, []);


    if (comment && comment.deleted)  
        return (<i> comment removed</i>);
    else 
        return comment && comment.text ? (
            <>
                <li>
                    <p>By {comment.by} {moment.unix(comment.time).fromNow()}</p>
                    <p>{ReactHtmlParser(comment.text)}</p>
                </li>
                <CommentsContainer key={props.commentId} commentsIds={comment.kids} />
            </>
        ) : null ;
};