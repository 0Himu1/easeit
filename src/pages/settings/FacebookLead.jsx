/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAddFacebookSettingsMutation, useGetFacebookSettingsQuery, useUpdateFacebookSettingsMutation } from '../../features/settings/settingsAPI';

export default function FacebookLead() {
  const [formMethod, setFormMethod] = useState('post');
  const {
    register, handleSubmit, setValue, watch, formState: { errors },
  } = useForm();
  const watchFields = watch(['appId', 'appSecret', 'webhookToken']);
  const [addFacebookSettings, { isSuccess: formDataAdded }] = useAddFacebookSettingsMutation();
  const [
    updateFacebookSettings,
    { isSuccess: formDataUpdated },
  ] = useUpdateFacebookSettingsMutation();
  const {
    data: fbSettingsData, isLoading, isError, error,
  } = useGetFacebookSettingsQuery();

  console.log(fbSettingsData);

  const onSubmit = (data) => {
    switch (formMethod) {
      case 'put':
        updateFacebookSettings(data);
        break;
      default:
        addFacebookSettings(data);
        break;
    }
  };

  useEffect(() => {
    if (fbSettingsData && fbSettingsData.length > 0) {
      const { settingsData } = fbSettingsData[0];
      const { appId, appSecret, webhookToken } = settingsData;

      setValue('appId', appId);
      setValue('appSecret', appSecret);
      setValue('webhookToken', webhookToken);
      setFormMethod('put');
    }
  }, [fbSettingsData]);

  useEffect(() => {
    setFormMethod('put');
  }, [watchFields]);

  useEffect(() => {
    if (formDataAdded || formDataUpdated) {
      console.log(`FormData ${formDataAdded ? 'added' : 'updated'} on server`);
    }
  }, [formDataAdded, formDataUpdated]);

  return (
    <div className="">
      <h1 className="text-lg font-semibold">Facebook Lead Intregation</h1>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="pb-8 border-b">
            <h1 className="text-lg">Facebook Application Settings</h1>
            <div className="mt-4">
              <h1 className="text-sm">Facebook Application ID</h1>
              <input {...register('appId')} type="text" className="text-sm py-1.5 px-3 mt-1 outline-none rounded-md border-2 focus:border-indigo-300 w-full" placeholder="" />
            </div>
            <div className="mt-4">
              <h1 className="text-sm">Facebook Application Secret</h1>
              <input {...register('appSecret')} type="text" className="text-sm py-1.5 px-3 mt-1 outline-none rounded-md border-2 focus:border-indigo-300 w-full" placeholder="" />
            </div>
          </div>

          <div className="pb-8 pt-4 border-b">
            <h1 className="text-lg">Module Settings</h1>
            <div className="mt-4">
              <h1 className="text-sm">Webhook Verify Token (you can change this if you want)</h1>
              <input {...register('webhookToken')} type="text" className="text-sm py-1.5 px-3 mt-1 outline-none rounded-md border-2 focus:border-indigo-300 w-full" placeholder="" />
            </div>
            <div className="mt-4">
              <h1 className="text-sm">
                Your unique webhook callback URL is:
              </h1>
              <input {...register('cbUrl')} type="text" className="text-sm py-1.5 px-3 mt-1 outline-none rounded-md border-2 focus:border-indigo-300 w-full" value="https://crm.solutionprovider.com.bd/facebook_leads_integration/webhook" disabled />
            </div>
          </div>

          <div className="pb-8 pt-4 border-b">
            <h1 className="text-lg">
              Fetch Facebook pages
            </h1>
            <button type="submit" className="mt-4 py-1.5 px-3 rounded-md text-sm bg-indigo-600 text-white">Fetch Facebook Page</button>
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
        </form>
      </div>
    </div>
  );
}
