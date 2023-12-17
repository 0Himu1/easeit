/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Tooltip } from 'react-tooltip';

function DateToolTip({ dateString }) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const dateObject = moment(dateString);
    const diffDays = moment().diff(dateObject, 'days');

    let formattedText = '';

    if (diffDays === 0) {
      formattedText = dateObject.format('h:mm a');
    } else if (diffDays === 1) {
      formattedText = 'Yesterday';
    } else if (diffDays <= 7) {
      formattedText = dateObject.format('dddd');
    } else {
      formattedText = dateObject.format('MMM D, YYYY');
    }

    setFormattedDate(formattedText);
  }, [dateString]);

  return (
    <div>
      <span
        className="cursor-pointer text-xs text-gray-800 underline"
        data-tooltip-id="date-tooltip"
        data-tooltip-content={moment(dateString).format('DD/MM/YYYY h:mm A')}
      >
        {formattedDate}
      </span>
      <Tooltip id="date-tooltip" />
    </div>
  );
}

export default DateToolTip;
