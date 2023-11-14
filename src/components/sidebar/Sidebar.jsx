/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import {
  BsArrowBarLeft, BsArrowBarRight, BsBarChartLine, BsBoxes, BsPeople,
} from 'react-icons/bs';
import { SlOptionsVertical } from 'react-icons/sl';
import { BiUserCircle } from 'react-icons/bi';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci';
// eslint-disable-next-line import/no-cycle
import { useLocation } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import logosm from './Solution Provider .webp';
import logo from './Solution Provider.jpg';

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  console.log();
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="pb-2 p-4 flex justify-between items-center">
          <img src={logo} alt="" className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`} />
          <button type="submit" onClick={() => setExpanded((curr) => !curr)} className="p-1.5 font-bold rounded-lg text-xl bg-gray-50 hover:bg-gray-100">
            {expanded ? (<BsArrowBarLeft />) : (<BsArrowBarRight />)}

          </button>
        </div>

        <ul className="flex-1 px-3">
          <SidebarItem link="dashboard" expanded={expanded} icon={<BsBarChartLine />} text="Dashboard" active={location.pathname.includes('dashboard')} />
          <SidebarItem link="announsment" expanded={expanded} icon={<BiUserCircle />} text="Announcements" active={location.pathname.includes('announsment')} />
          <SidebarItem link="sales" expanded={expanded} icon={<BsBoxes />} text="Sales Commission" alart active={location.pathname.includes('sales')} />
          <SidebarItem link="leads" expanded={expanded} icon={<BsPeople />} text="Leads" active={location.pathname.includes('leads')} />
          <hr className="my-3" />
          <SidebarItem link="settings" expanded={expanded} icon={<CiSettings />} text="Settings" active={location.pathname.includes('settings')} />
          <SidebarItem link="help" expanded={expanded} icon={<IoIosHelpCircleOutline />} text="Help" active={location.pathname.includes('help')} />
        </ul>

        <div className="border-t flex p-3">
          <img src={logosm} alt="logo" className="w-10 h-10 rounded-md" />

          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>
            <div className="">
              <h4 className="font-semibold">Himu Nazmul</h4>
              <span className="text-xs">0himu1@gmail.com</span>
            </div>
            <div className="p-1.5 font-bold rounded-lg bg-gray-50 hover:bg-gray-100">
              <SlOptionsVertical />
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
