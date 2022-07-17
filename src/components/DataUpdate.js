import * as xlsx from 'xlsx';
import { useNavigate } from 'react-router-dom';

const DataUpdate=()=>{

    const navigate = useNavigate();
 
  const readUploadFile = (e) => {
    e.preventDefault();

    if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = xlsx.read(data,{type: 'Array'});
            workbook.SheetNames.forEach((name)=>{
            const item= xlsx.utils.sheet_to_json(workbook.Sheets[name])
              localStorage.removeItem(name)
              localStorage.setItem(name,JSON.stringify(item))
              navigate('/')
           })
        };
        reader.readAsArrayBuffer(e.target.files[0]);
    }
}

  return (
    <div className='uploadFile'>
        <div className='row'>
        <div className='instruction col-sm-12 col-md-12 col-lg-12'>
        <h2>UPDATING DATA</h2>
        <h4>To update data, follow the given instructions:</h4>
        <ol>
            <li>Open the provided data.xlsx </li>
            <li>Update data based on sheets</li>
            <li>Upload file</li>
        </ol>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-12'>
      <form>
        <label className='label' htmlFor="upload">Upload File</label>
        <input className='file'
        type="file"
        name="upload"
        id="upload"
        onChange={readUploadFile}
        />
    </form>  
    </div>
    </div>
    </div>    
  );
}

export default DataUpdate;