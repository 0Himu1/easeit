import React from 'react';

export default function WorkScope({ scopes }) {
  // `scopes` is an array of words, render this array in one single string
  const combinedScopes = scopes.join(', ');

  return (
    <p className="text-sm">{combinedScopes}</p>
  );
}
