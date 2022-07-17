import Animation from "./Animation"
import PageHeader from "./PageHeader"

const Profile=()=>{
    return(
    <Animation>
        <PageHeader />
        <div className="container-fluid page-top justify-content-center">
            <h1 className="text-center mt-4">ACADEMIC QUALIFICATION</h1>
            <table className="table table-striped table-sm mt-4">
                <thead>
                    <tr>
                        <th>Qualification</th>
                        <th>School/Institution</th>
                        <th>Year</th>
                        <th>Specialization</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bach Engineering</td>
                        <td>Universiti Kebangsaan Malaysia</td>
                        <td>2000</td>
                        <td>Civil Engineering (structure) </td>
                    </tr>
                    <tr>
                        <td>Master of Engineering</td>
                        <td>Universiti Kebangsaan Malaysia</td>
                        <td>2003</td>
                        <td>Environmental Engineering</td>
                    </tr>
                    <tr>
                        <td>PhD</td>
                        <td>Cardiff University</td>
                        <td>2008</td>
                        <td>Civil Engineering (Geo-envirenmental Engineering) </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Animation>)
}
export default Profile