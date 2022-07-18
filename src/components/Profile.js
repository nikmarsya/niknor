import Animation from "./Animation"
import PageHeader from "./PageHeader"
import { useState,useEffect } from "react";

const Profile=()=>{

    const [profile,setProfile]=useState([]);
    const [qualification,setQualification]=useState([])
  

    useEffect(()=>{
        const prof=JSON.parse(localStorage.getItem('Profile'))
        if(prof)
            setProfile(prof)
        else
            console.log("error")
        const qua=JSON.parse(localStorage.getItem('Qualifications'))
        if(qua)
            setQualification(qua)
    },[])

   
   
    return(
    <Animation>
        <PageHeader />
        <div className="container-fluid page-top text-left">
            <h3 className="mt-4">PROFILE</h3>
            <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="row">
                    <div className="col-sm12 ">
                 {profile.map( (item,i) =>(
                    <div key={i}>
                   <p>Name: {item.name}</p>
                       <p>Designation: {item.designation}</p>
                    <p>Email: {item.email}</p> 
                    </div>
))}   
                    </div>
                </div>
                <hr/>
                <div className="row"></div>
                <div className="col-sm12"></div>
                <h5>Academic Qualifications</h5>
                <table className="table">
                    <thead>
                        <tr>
                        <th>Certificate</th>
                        <th>School</th>
                        <th>Year</th>
                        <th>Area of Specialization</th>
                        </tr>
                    </thead>
                    <tbody>
                    {qualification.map( (list,i) =>(
                        <tr key={i}>
                            <td>{list.certificate}</td>
                            <td>{list.school}</td>
                            <td>{list.year}</td>
                            <td>{list.area}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <image id="profile-img" src="images/niknor.jpg" alt='niknor'></image>
            
            </div>
            </div>
        </div>
    </Animation>)
}
export default Profile