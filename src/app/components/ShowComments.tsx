import React from 'react';

const comments = [
  {
    name: 'john doe',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, quae.',
    time: '2012-01-31 23:59:59',
  },
  {
    name: 'john doe',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, quae.',
    time: '2012-01-31 23:59:59',
  },
  {
    name: 'john doe',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, quae.',
    time: '2012-01-31 23:59:59',
  },
  {
    name: 'john doe',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, quae.',
    time: '2012-01-31 23:59:59',
  },
];

const ShowComments = () => {
  return (
    <div className="comments">
      {comments.map((comment) => {
        return (
          <>
            <div className="comment__name-and-time">
              <div className="name">{comment.name}</div>
              <div className="time">{comment.time}</div>
            </div>
            <div className="comment__text">{comment.text}</div>
          </>
        );
      })}
      ;
    </div>
  );
};

export default ShowComments;
