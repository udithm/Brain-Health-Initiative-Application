import * as React from "react";
import { NavBar } from "../components/NavBar";
import MUIDataTable from "mui-datatables";
import {useHistory} from "react-router-dom"
export const AnalyticsTableView = () => {
    let history = useHistory();
  const data = [
    {
      name: "Referral Analytics",
      desc: "Visualization to see statistics of referrals",
      link: "/referalAnalytics",
    },
    {
      name: "Hospital Count Analytics",
      desc: "Visualization to see statistics of Hospitals",
      link: "/hospitalAnalysis",
    },
    {
      name: "ICD10 Frequency Analysis",
      desc: "Visualization to see distribution of ICD10 recorded",
      link: "/diseaseAnalytics",
    },
    {
      name: "Questionnaire Analysis",
      desc: "Visualization to see the usage of questionnaire",
      link: "/questionnaireAnalytics",
    },
    {
      name: "Distict Doctor Analysis",
      desc: "Visualization to see the spread of doctors in different districts",
      link: "doctorAnalytics",
    },
  ];
  const columns = [
    {
      name: "AnalyticsName",
      label: "Analytics Name",
      options: {
        filter: true,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          return data[dataIndex].name;
        },
      },
    },
    {
      name: "Description",
      label: "Description",
      options: {
        filter: true,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          return data[dataIndex].desc;
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    download: false,
    print: false,
    pagination: false,
    selectableRowsHeader: false,
    selectableRowsHideCheckboxes: true,
    onRowClick: (rowData, rowState) => {
      history.push(data[rowState.dataIndex].link);
    },
  };
  return (
    <>
      <NavBar></NavBar>
      <div style={{width:"80%", margin:"10px auto"}}>
        <MUIDataTable
          title={"Analytics"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </>
  );
};
