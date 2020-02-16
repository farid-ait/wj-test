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
        getComment(props.commentId).then(data => data.text && setComment(data));
    }, []);

    return comment && comment.text ? (
        <>
            <li>
                <p>By {comment.by} {moment.unix(comment.time).fromNow()}</p>
                <p>{ReactHtmlParser(comment.text)}</p>
            </li>
            <CommentsContainer key={props.commentId} commentsIds={comment.kids} />
        </>
    ) : null;
};