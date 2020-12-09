import React, { useEffect, useRef, useState } from 'react';
import Axios from "axios";
import apiPath from '../../common/helpers/apiPath';

import {ProgressBar} from 'react-bootstrap';

const Data = () => {
  const refTagFile: any = useRef(null);
  const [progressValue, setprogressValue] = useState<number>(0);
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
      data: formData,
      url: "http://localhost:3001" + apiPath.uploadSocialMediaFile,
      onUploadProgress: progress => {
        const { total, loaded } = progress;
        const totalSizeInMB = total / 1000000;
        const loadedSizeInMB = loaded / 1000000;
        const uploadPercentage: number = (loadedSizeInMB / totalSizeInMB) * 100;
        setprogressValue( Math.floor(uploadPercentage) );
      }
    });

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
                <th>Name</th>
                <th>From</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>samAnderson5450</td>
                <td>Facebook</td>
                <td>1.3gb</td>
              </tr>
              <tr>
                <td>2</td>
                <td >mydata.snapchat</td>
                <td>Snapchat</td>
                <td>0.32gb</td>
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
                <ProgressBar animated now={progressValue} label={progressValue} className="col-12 p-0"/>
              </div>
              <div className="col-12 pt-2 d-flex justify-content-center ">
                <button className={`btn btn-outline-dark px-3 ${progressValue === 100 ? "btn-success" : ""}`}>I' m Ready</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Data;