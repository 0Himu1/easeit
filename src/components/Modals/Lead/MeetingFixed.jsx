import React from 'react';

export default function MeetingFixed({ closeModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={closeModal} />
      <div className="bg-white p-8 rounded-lg z-10">
        <h2 className="text-xl font-semibold mb-4">Item 1 Modal</h2>
        <p>Specific content for Item 1 goes here.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}
