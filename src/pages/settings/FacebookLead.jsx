import React from 'react';
import { useLocation } from 'react-router-dom';

export default function FacebookLead() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="">
      <h1 className="text-lg font-semibold">Facebook Lead Intregation</h1>
      <div className="p-6 bg-white rounded-lg shadow-md">

        <div className="pb-8 border-b">
          <h1 className="text-lg">Facebook Application Settings</h1>
          <div className="mt-4">
            <h1 className="text-sm">Facebook Application ID</h1>
            <input type="text" className="text-sm py-1.5 px-3 mt-1 outline-none rounded-md border-2 focus:border-indigo-300 w-full" placeholder="" />
          </div>
          <div className="mt-4">
            <h1 className="text-sm">Facebook Application Secret</h1>
            <input type="text" className="text-sm py-1.5 px-3 mt-1 outline-none rounded-md border-2 focus:border-indigo-300 w-full" placeholder="" />
          </div>
        </div>

        <div className="pb-8 pt-4 border-b">
          <h1 className="text-lg">Module Settings</h1>
          <div className="mt-4">
            <h1 className="text-sm">Webhook Verify Token (you can change this if you want)</h1>
            <input type="text" className="text-sm py-1.5 px-3 mt-1 outline-none rounded-md border-2 focus:border-indigo-300 w-full" placeholder="" />
          </div>
          <div className="mt-4">
            <h1 className="text-sm">
              Your unique webhook callback URL is:
            </h1>
            <input type="text" className="text-sm py-1.5 px-3 mt-1 outline-none rounded-md border-2 focus:border-indigo-300 w-full" value="https://crm.solutionprovider.com.bd/facebook_leads_integration/webhook" disabled />
          </div>
        </div>

        <div className="pb-8 pt-4 border-b">
          <h1 className="text-lg">
            Fetch/relist Facebook pages
          </h1>
          <button className="mt-4 py-1.5 px-3 rounded-md text-sm bg-indigo-600 text-white">Fetch Facebook Page</button>
        </div>
        <div className="pb-8 pt-4 border-b">
          <table className="w-full">
            <thead>
              <tr className="">
                <th className="text-sm font-medium text-left p-2.5">Page Name</th>
                <th className="text-sm font-medium text-left p-2.5">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-sm font-medium text-left p-2.5">Nice Page Name</th>
                <th className="text-left">
                  <button className="py-1.5 px-3 rounded-md text-sm font-medium bg-indigo-600 text-white">Substribe</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
