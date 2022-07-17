import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { useState,useEffect } from "react";

import PageHeader from "./PageHeader"
import Animation from "./Animation"

const Collaborations=()=>{

    const [collaboration,setCollaboration]=useState([]);
  

    useEffect(()=>{
        const coll=JSON.parse(localStorage.getItem('Collaborations'))
        if(coll)
            setCollaboration(coll)
    },[])

  const data = {
    columns: [
      {
        label: 'University',
        field: 'university',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Year',
        field: 'year',
        sort: 'asc',
        width: 270
      }
    ],
    rows: collaboration,
  };

    return(
   <Animation>
        <PageHeader />
        <div className="container-fluid page-top text-left border">
            <h1 className="mt-4">UNIVERSITIES COLLABORATIONS</h1>
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
    )
}
export default Collaborations