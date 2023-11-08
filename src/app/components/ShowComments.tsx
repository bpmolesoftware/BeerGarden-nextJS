import React, { useEffect, useState } from 'react';

import { getComments } from '@/utils/apiDataUtil';

const ShowComments = ({ id }: any) => {
  const [comments, setComments] = useState([]);

  const getCommentFromDbs = async (comment: string): Promise<void> => {
    const result: any = await getComments(comment);
    setComments(result?.results);
  };

  useEffect(() => {
    getCommentFromDbs(id);
  }, [comments]);

  return (
    <div className="comments">
      {comments?.map((comment) => {
        return (
          <>
            <div className="comment__name-and-time">
              <div className="name">{comment?.name}</div>
              {/* <div className="time">{comment.time}</div> */}
            </div>
            <div className="comment__text">{comment?.commentText}</div>
          </>
        );
      })}
    </div>
  );
};

export default ShowComments;
