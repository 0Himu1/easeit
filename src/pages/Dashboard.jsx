/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

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
    <div>Dashboard</div>
  );
}
