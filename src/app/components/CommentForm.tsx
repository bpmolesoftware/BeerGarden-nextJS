import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

const CommentForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const params = useParams();
  const { id }: any = params;

  function handleName(e: any) {
    setName(e);
  }
  function handleComment(e: any) {
    setComment(e);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    const data = { content: [name, comment, id] };

    console.log(data);

    axios.post('/api/comment', data);
  }

  return (
    <div className="comment-component">
      <form className="comment-form">
        <label htmlFor="name" className="comment">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="comment-form__name"
          placeholder="Insert your name here..."
          onChange={(e) => handleName(e.currentTarget.value)}
        />
        <label htmlFor="comment" className="comment">
          Leave your comment here
        </label>
        <textarea
          id="comment"
          name="comment"
          className="comment-form__comment"
          placeholder="Insert your name here..."
          onChange={(e) => handleComment(e.currentTarget.value)}
        />
        <button className="send-comment" onClick={(e) => handleSubmit(e)}>
          Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;