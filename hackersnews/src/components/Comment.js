import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';

import { getComment } from '../services/api';

export const Comment = ({ commentId }) => {
    const [comment, setComment] = useState([]);
    
    useEffect(() => {
        getComment(commentId).then(data => data.text && setComment(data));
    }, []);

    return comment && comment.text ? (
        <>
            <li>
                <small>
                    <p>By {comment.by} {comment.time} {moment.unix(comment.time).fromNow()}</p>
                    <p>{ReactHtmlParser(comment.text)}</p>
                </small>
            </li>
        </>
    ) : null;
};