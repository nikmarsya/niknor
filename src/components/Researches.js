import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { useState,useEffect } from "react";

import Animation from "./Animation"
import PageHeader from "./PageHeader"

const Researches=()=>{

    const [research,setResearch]=useState([]);
  

    useEffect(()=>{
        const search=JSON.parse(localStorage.getItem('Researches'))
        if(search)
            setResearch(search)
    },[])

  const data = {
    columns: [
      {
        label: 'Project No',
        field: 'no',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Project Title',
        field: 'title',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Role',
        field: 'role',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Year',
        field: 'year',
        sort: 'asc',
        width: 200
      }
      
    ],
    rows: research,
  };
    
    return(
    <Animation>
    <PageHeader />
        <div className="container-fluid text-left page-top">
            <h3 className="mt-4">RESEARCH PROJECTS</h3>
            <div className="row justify-content-md-center table-responsive">
            <div className="col-sm-12 col-md-8">
    <MDBDataTable

    className='mdbtable'
    
      data={data}
    />
    </div></div>
        </div>
        
    </Animation>)
}
export default Researches