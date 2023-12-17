import React from 'react';

export default function Source({ source }) {
  let style;
  // decide styling
  switch (source) {
    case 'Facebook':
      style = 'text-[#1877F2] bg-[#1877F205] border-[#1877F2]';
      break;
    case 'WhatsApp':
      style = 'text-[#25D366] bg-[#25D36605] border-[#25D366]';
      break;
    case 'Web':
      style = 'text-[#25D3C9] bg-[#25D3C905] border-[#25D3C9]';
      break;
    case 'By Phone':
      style = 'text-[#033434] bg-[#03343405] border-[#033434]';
      break;
    default:
      break;
  }
  return (
    <p className={`text-[10px] px-3 py-1 rounded-full border text-center ${style}`}>{source}</p>
  );
}
