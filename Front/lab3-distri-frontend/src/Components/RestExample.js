import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataModelTable from './DataModelTable';

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
    <div>
      <h1>Datos recuperados de la API SENTRY</h1>
      <DataModelTable data={responses} />
    </div>
  );
};

export default RestExample;
