import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
import { CommentsContainer } from './CommentsContainer';
import { CommentType, getComment } from '../services/api';
import { CommentSection, CommentTitle, CommentText } from '../styles/CommentStyle'

interface CommentProps {
    commentId: number
}

export const Comment: React.FC<CommentProps> = (props:CommentProps) => {

    const [comment, setComment] = useState<CommentType>();
    
    useEffect(() => {
        getComment(props.commentId).then(data => data.id && setComment(data));
    }, []);


    if (comment && comment.deleted)  
        return (<span>Comment removed</span>);
    else 
        return comment && comment.text ? (
            <CommentSection>
                <CommentTitle>
                    By {comment.by} {moment.unix(comment.time).fromNow()}
                </CommentTitle>
                <CommentText>
                    {ReactHtmlParser(comment.text)}
                </CommentText>      
                <CommentsContainer key={props.commentId} commentsIds={comment.kids} />
            </CommentSection>
        ) : null ;
};