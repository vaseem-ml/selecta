import React, { useState } from 'react';
import Chart from "react-apexcharts";
import MapChart from '../MapChart/MapChart';

const General: React.FC = () => {

  const [chartOption, setChartOption] = useState({
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    },
  });

  const [series, setSerieas] = useState([{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }]);

  return (
    <>
      <div className=""></div>
      <div className="col-12 p-3 overflow-hidden">
        <div className="col-xl-6 col-lg-6 col-md-6 col-12 p-0 float-left ">
          <div className="genH border">
            <div className="custHeading">
              <span>General Data</span>
            </div>
            <div className="mt-3">
              <div className="">San Andersan</div>
              <div className="">SanjohnAnderson@gmail.com</div>
              <div className="">Birthday : 6 March 1997</div>
              <div className="">Male</div>
              <div className="">Age : 23</div>
              <div className="">8 Bisopher Dr.</div>
              <div className="">Cape Town</div>
              <div className="">Single</div>
            </div>
          </div>
          <div className="genH border">
            <Chart
              options={chartOption.options}
              series={series}
              type="line"
              width="420"
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-12 p-0 float-left">
          <div className="genH border">
            {<MapChart />}
          </div>
          <div className="genH border">
            <Chart
              options={chartOption.options}
              series={series}
              type="line"
              width="420"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default General;
