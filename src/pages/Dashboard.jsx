/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { json } from 'react-router-dom';

export default function Dashboard() {
  const { register, handleSubmit } = useForm();
  const [comment, setComment] = useState([]);

  const onSubmit = async (data) => {
    console.log(data.file);
    const formData = new FormData();
    formData.append('file', data.file[0]);
    formData.append('file', data.file[1]);
    formData.append('name', data.name);
    formData.append('comment', data.comment);

    try {
      // Make a POST request to localhost:5000/comment using fetch
      const response = await fetch('http://localhost:5000/comment', {
        method: 'POST',
        body: formData,
      });

      // Ensure the request was successful (status code 2xx)
      if (response.ok) {
        const responseData = await response.json();
        console.log('Server response:', responseData);
      } else {
        console.error('Server error:', response.statusText);
      }
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:5000/comment')
      .then((res) => setComment(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" encType="multipart/form-data">
        <div>
          <p className="text-sm">Name:</p>
          <input {...register('name')} type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <p className="text-sm">Comment:</p>
          <textarea {...register('comment')} className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <p className="text-sm">File:</p>
          <input {...register('file')} type="file" multiple className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md">Submit</button>
      </form>

      {comment && comment.map((c) => (
        <>
          <p>{c.name}</p>
          <p>{c.comment}</p>
          <img src={`http://localhost:5000/images/${c.file}`} alt="" />
        </>
      ))}
    </div>
  );
}
