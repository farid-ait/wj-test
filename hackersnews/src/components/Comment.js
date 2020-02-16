import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
import { CommentsContainer } from '../components/CommentsContainer';

import { getComment } from '../services/api';

export const Comment = ({ commentId }) => {
    const [comment, setComment] = useState([]);
    
    useEffect(() => {
        getComment(commentId).then(data => data.text && setComment(data));
    }, []);

    return comment && comment.text ? (
        <>
            <li>
                <p>By {comment.by} {moment.unix(comment.time).fromNow()}</p>
                <p>{ReactHtmlParser(comment.text)}</p>
            </li>
            <CommentsContainer key={commentId} commentsIds={comment.kids} />
        </>
    ) : null;
};