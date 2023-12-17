/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function CommentComponent({ commentData }) {
  // Your custom rendering logic for comments
  return (
    <div>
      <p>Comment:</p>
      <p>{commentData?.comment}</p>
      <p>
        By:
        {commentData?.name}
      </p>
      <p>
        Date:
        {new Date(commentData?.date).toLocaleString()}
      </p>
      {/* You can include logic to render images if available */}
      {commentData?.images && commentData?.images.length > 0 && (
        <div>
          <p>Images:</p>
          <ul>
            {commentData?.images.map((image, index) => (
              <li key={image}>
                <img src={image} alt={`Image ${index + 1}`} style={{ maxWidth: '100px' }} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CommentComponent;
