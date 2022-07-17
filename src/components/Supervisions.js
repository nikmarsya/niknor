import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { useState,useEffect } from "react";

import Animation from "./Animation"
import PageHeader from "./PageHeader"

const Supervisions=()=>{
    
    const [supervision,setSupervision]=useState([]);
  

    useEffect(()=>{
        const sup=JSON.parse(localStorage.getItem('Supervisions'))
        if(sup)
            setSupervision(sup)
    },[])

  const data = {
    columns: [
      {
        label: 'Program level',
        field: 'level',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Name of Student',
        field: 'name',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Title of Thesis/Project',
        field: 'title',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Role',
        field: 'role',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Year Graduated',
        field: 'year',
        sort: 'asc',
        width: 200
      }
      
    ],
    rows: supervision,
  };
    
    return(
    <Animation>
        <PageHeader />
        <div className="container-fluid page-top text-left border">
                <h3 className="mt-4">SUPERVISIONS</h3>
                <div className="row justify-content-md-center table-responsive">
            <div className="col-sm-12 col-md-8">
    <MDBDataTable
      
      bordered
      small
      data={data}
    />
    </div></div>
        </div>
    
    </Animation>)
}
export default Supervisions