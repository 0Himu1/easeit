import React from 'react';
import { Link } from 'react-router-dom';

export default function SidebarItem({
  icon, text, active, alart, expanded, link,
}) {
  return (
    <li className={`
    relative py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
    ${
        active
          ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
          : 'hover:bg-indigo-50 text-gray-600 '
    }
    `}
    >
      <Link to={link} className="flex items-center">
        {icon}
        <span className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>{text}</span>
        {alart && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`} />
        )}
      </Link>

      {!expanded && (
        <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-sm text-indigo-800 invisible opacity-20 -translate-x-1 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">{text}</div>
      )}
    </li>
  );
}
