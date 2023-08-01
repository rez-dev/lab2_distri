import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const DataModelTable = ({ data }) => {
  return (
    <DataTable value={data}>
      <Column field='_id' header="ID"></Column>
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
  );
};

export default DataModelTable;