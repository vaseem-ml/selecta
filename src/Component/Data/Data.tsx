import React, { useRef } from 'react';
import { Table } from 'react-bootstrap';
import Axios from "axios";
import Helper from '../../common/helpers/Helper';
import apiPath from '../../common/helpers/apiPath';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker 
} from "react-simple-maps"

const Data = () => {
  const refTagFile: any = useRef(null);

  function fileChange(e: any) {
    refTagFile.current = e.target.files[0];
    console.log(refTagFile.current);
    uploadFile();
  }

  async function uploadFile() {
    let path = apiPath.uploadSocialMediaFile;
    const file = refTagFile.current;
    var formData = new FormData();
    formData.append('file', file);

    //const fr = await Helper.post_formdata(formData, path);

    Axios({
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data:formData,
      url: "http://localhost:3001"+apiPath.uploadSocialMediaFile,
      onUploadProgress: progress => {
        const { total, loaded } = progress;
        const totalSizeInMB = total / 1000000;
        const loadedSizeInMB = loaded / 1000000;
        const uploadPercentage = (loadedSizeInMB / totalSizeInMB) * 100;
        console.log('this is progress', uploadPercentage);
      }
    })
  }

  return (
    <>

      <div className="col-12 p-0 d-flex justify-content-center bg-white">
        <div className="col-xl-7 col-lg-7 col-md-12 col-12 p-2">
          <div className="col-12 p-0 py-3">
            <a className="custHref">
              Click here view links that will take you right to your downloadeble data files!
            </a>
          </div>
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td >Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
          <div className="col-12 p-0 d-flex justify-content-center">
            <div className="col-xl-7 col-lg-7 col-md-12 col-12 p-2">
              <div className="custom-file customFile">
                <input type="file" onChange={fileChange} className="custom-file-input" id="customFile" />
                <label className="custom-file-label border" htmlFor="customFile">File Upload</label>
              </div>
              <div className="col-12 pt-2 d-flex justify-content-center">
                <button className="btn btn-outline-dark px-3">I' m Ready</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Data;