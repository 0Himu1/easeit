/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useAddCommentMutation } from '../features/leads/leadsAPI';

export default function FileUploadTest() {
  const { register, handleSubmit, setValue } = useForm();
  const [addComment, { isSuccess }] = useAddCommentMutation();
  const [comments, setComments] = useState([]);

  const onSubmit = (data) => {
    addComment(data);
  };

  useEffect(() => {
    if (isSuccess) {
      console.log('Comment added Successfully');
    }
  }, [isSuccess]);

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 max-w-md rounded-md shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name:</label>
        <input
          id="name"
          {...register('name')}
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500"
        />

        <label htmlFor="comment" className="block text-sm font-medium text-gray-600">Comment:</label>
        <textarea
          id="comment"
          {...register('comment')}
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500"
        />

        <label htmlFor="file" className="block text-sm font-medium text-gray-600">Files:</label>
        <input
          id="file"
          type="file"
          {...register('file', { required: 'Please select at least one file' })}
          multiple
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500"
        />

        <button
          type="submit"
          className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300"
        >
          Submit
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Comments:</h2>
        <ul className="list-disc list-inside">
          {comments.map((comment) => (
            <li key={comment._id} className="mb-2">
              {comment.name}
              :
              {' '}
              {comment.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
