import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import MessegeReschedule from './Modals/Lead/MessegeReschedule';
import NoResponse from './Modals/Lead/NoResponse';
import NeedSupport from './Modals/Lead/NeedSupport';
import NumberCollected from './Modals/Lead/NumberCollected';
import CallRescheduled from './Modals/Lead/CallRescheduled';
import FutureClient from './Modals/Lead/FutureClient';
import MeetingFixed from './Modals/Lead/MeetingFixed';
import MeetingReschedule from './Modals/Lead/MeetingReschedule';
import CancelMetting from './Modals/Lead/CancelMetting';

const getstyleClasses = (value) => {
  let styleClass = '';
  switch (value) {
    case 'unread':
      styleClass = 'text-amber-700 border-amber-700 bg-amber-100 outline-amber-700';
      return styleClass;
    case 'Message Rescheduled':
      styleClass = 'text-orange-700 border-orange-700 bg-orange-100 outline-orange-700';
      return styleClass;
    case 'No Response':
      styleClass = 'text-yellow-700 border-yellow-700 bg-yellow-100 outline-yellow-700';
      return styleClass;
    case 'Need Support':
      styleClass = 'text-violet-700 border-violet-700 bg-violet-100 outline-violet-700';
      return styleClass;
    case 'Number Collected':
      styleClass = 'text-indigo-700 border-indigo-700 bg-indigo-100 outline-indigo-700';
      return styleClass;
    case 'Call Reschedule':
      styleClass = 'text-fuchsia-700 border-fuchsia-700 bg-fuchsia-100 outline-fuchsia-700';
      return styleClass;
    case 'Future Client':
      styleClass = 'text-cyan-700 border-cyan-700 bg-cyan-100 outline-cyan-700';
      return styleClass;
    case 'Meeting Fixed':
      styleClass = 'text-green-700 border-green-700 bg-green-100 outline-green-700';
      return styleClass;
    case 'Meeting Reschedule':
      styleClass = 'text-pink-700 border-pink-700 bg-pink-100 outline-pink-700';
      return styleClass;
    case 'Cancel Meeting':
      styleClass = 'text-rose-700 border-rose-700 bg-rose-100 outline-rose-700';
      return styleClass;
    default:
      return styleClass;
  }
};

export default function StatusDropdowns({ status }) {
  const [selectedItem, setSelectedItem] = useState(status);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Update the selectedItem when the status prop changes
    setSelectedItem(status);
  }, [status]);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const sellectedOptions = [
    'unread',
    'No Response',
    'Message Rescheduled',
    'Need Support',
    'Number Collected',
    'Call Reschedule',
    'Future Client',
    'Meeting Fixed',
    'Meeting Reschedule',
    'Cancel Meeting',
  ];

  const renderModal = () => {
    switch (selectedItem) {
      case 'Message Rescheduled':
        return <MessegeReschedule closeModal={closeModal} />;
      case 'No Response':
        return <NoResponse closeModal={closeModal} />;
      case 'Need Support':
        return <NeedSupport closeModal={closeModal} />;
      case 'Number Collected':
        return <NumberCollected closeModal={closeModal} />;
      case 'Call Reschedule':
        return <CallRescheduled closeModal={closeModal} />;
      case 'Future Client':
        return <FutureClient closeModal={closeModal} />;
      case 'Meeting Fixed':
        return <MeetingFixed closeModal={closeModal} />;
      case 'Meeting Reschedule':
        return <MeetingReschedule closeModal={closeModal} />;
      case 'Cancel Meeting':
        return <CancelMetting closeModal={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-60">
      <select
        value={selectedItem}
        className={`w-60 px-4 py-2 border rounded-lg ${getstyleClasses(selectedItem)} appearance-none cursor-pointer`}
        onChange={(e) => handleSelect(e.target.value)}
      >
        {sellectedOptions.map((o) => (
          <option key={o} value={o} className="bg-white text-gray-800 py-2">
            {o}
          </option>
        ))}
      </select>
      <IoIosArrowDown className={`absolute top-1/2 right-3 transform -translate-y-1/2 ${getstyleClasses(selectedItem)}`} />
      {modalOpen && <div className="">{renderModal()}</div>}
    </div>
  );
}
