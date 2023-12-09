/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import StatusDropdowns from '../components/StatusDropdowns';
import AddnewLeadButton from '../components/buttons/AddnewLeadButton';
import FileUploadTest from '../components/FileUploadTest';

export default function Dashboard() {
  return (
    <div className="w-full flex items-center justify-center">
      <FileUploadTest />
    </div>
  );
}
