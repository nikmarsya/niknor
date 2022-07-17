import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { useState,useEffect } from "react";

import Animation from "./Animation"
import PageHeader from "./PageHeader";

const Publications = () => {

    const [publication,setPublication]=useState([]);
  

    useEffect(()=>{
        const pub=JSON.parse(localStorage.getItem('Publications'))
        if(pub)
            setPublication(pub)
    },[])

  const data = {
    columns: [
      {
        label: 'Type',
        field: 'type',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Year',
        field: 'year',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Title',
        field: 'title',
        sort: 'asc',
        width: 200
      }
      
    ],
    rows: publication,
  };

  return (
    <Animation>
    <PageHeader/>
    <div className="container-fluid page-top text-left border">
            <h3 className="mt-4">PUBLICATIONS</h3>
            <div className="row justify-content-md-center table-responsive">
            <div className="col-sm-12 col-md-8">
    <MDBDataTable
      bordered
      small
      data={data}
    />
    </div></div>
    </div>
    </Animation>
  );
}

export default Publications;