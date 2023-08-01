import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RestExample = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
  axios.get('http://localhost:8989/api/responses')
      .then((response) => {
        setResponses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching responses:', error);
      });
  }, []);

  return (
        <div className="flex flex-col mt-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold leading-tight">Responses</h2>
            </div>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-500">
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-900">
                            H
                        </th>
                        <th scope="col" className="px-12 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-900">
                            Diameter
                        </th>
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-900">
                            Full Name
                        </th>
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-900">
                            ID
                        </th>
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-900">
                            V Inf
                        </th>
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-900">
                            Last Obs JD
                        </th>
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-900">
                            N Imp
                        </th>
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-900">
                            IP
                        </th>
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-900">
                            Last Obs
                        </th>
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-900">
                            Cum PS
                        </th>
                        <th scope="col" className="px-12 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-900">
                            Description
                        </th>
                        <th scope="col" className="px-12 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-900">
                            TS Max
                        </th>
                        <th scope="col" className="px-12 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-900">
                            Range
                        </th>
                    </tr>
                </thead>
                   
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-500">
                  {responses?.map((response) => (
                    <tr key={response._id}>
                      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-900">
                        {response.h}
                      </td>
                      <td className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-900">
                        {response.diameter}
                      </td>
                      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-900">
                        {response.fullname}
                      </td>
                      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-900">
                        {response.id}
                      </td>
                      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-900">
                        {response.v_inf}
                      </td>
                      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-900">
                        {response.last_obs_jd}
                      </td>
                      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-900">
                        {response.n_imp}
                      </td>
                      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-900">
                        {response.ip}
                      </td>
                      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-900">
                        {response.last_obs}
                      </td>
                      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-900">
                        {response.ps_cum}
                      </td>
                      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-900">
                        {response.des}
                      </td>
                      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-900">
                        {response.ts_max}
                      </td>
                      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-900">
                        {response.range}
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
  );
};


/*
      <Column field='ps_max' header="Max PS"></Column>
      <Column field='h' header="H"></Column>
      <Column field='diameter' header="Diameter"></Column>
      <Column field='fullname' header="Full Name"></Column>
      <Column field='id' header="ID"></Column>
      <Column field='v_inf' header="V Inf"></Column>
      <Column field='last_obs_jd' header="Last Obs JD"></Column>
      <Column field='n_imp' header="N Imp"></Column>
      <Column field='ip' header="IP"></Column>
      <Column field='last_obs' header="Last Obs"></Column>
      <Column field='ps_cum' header="Cum PS"></Column>
      <Column field='des' header="Description"></Column>
      <Column field='ts_max' header="TS Max"></Column>
      <Column field='range' header="Range"></Column>
    </DataTable>

*/
export default RestExample;
