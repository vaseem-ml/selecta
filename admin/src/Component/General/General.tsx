import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import BubbleChart from '../BubbleChart/BubbleChart';
import BubbleChartEx from '../BubbleChartEx/BubbleChartEx';
import MapChart from '../MapChart/MapChart';
import moment from 'moment';
import Profile from '../../uploads/facebook-davidrom524/profile_information/profile_information.json'

const General: React.FC = () => {

  const[dateData, setDateData] = useState<any>([{
    testDates: [],
    testCount: []
  }])
  
  const profile = Profile.profile;
  console.log('this is profile', profile);


  let data: { date: string, count: number }[] = [];
  let montsWithYear:any[] = [];
  let chartCount: number[] = []
  useEffect(() => {

    profile.groups.map((group:any) => { 
      if(data.length===0) {
        const time = moment.unix(group.timestamp).format('YY-MMM');

        data.push({date: time, count: 1})
      } else {
        let date = moment.unix(group.timestamp).format('YY-MMM');
        let count=0;
        data.map((localState: any) => {
          
          if(localState.date===date) {
            count+=1;
            localState.count+=1;
          }
        });
        if(count===0) {
          data.push({date: date, count: 1});
        } else {
          
        }
      }
    })

    for( var i=data.length-1; i>=0; i--) {
      montsWithYear.push(data[i].date);
      if(chartCount.length===0) {
        chartCount.push(data[i].count)
      } else {
        let newCount = chartCount[chartCount.length-1]+data[i].count;
        chartCount.push(newCount);
      }
    }


    setSerieas([{
      name:"desktop",
      data: chartCount
    }])


    ///chart option
    setChartOption({
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
          categories: montsWithYear,
        }
      },
    })
  }, [])

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
        categories: dateData[0].testDates,
      }
    },
  });

  const [series, setSerieas] = useState<any>([{
    name: "Desktops",
    data: []
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
              <div className="">{profile.name.full_name}</div>
              <div className="">{profile.emails.emails[0]}</div>
              <div className="">{profile.birthday.day+'-'+profile.birthday.month+'-'+profile.birthday.year}</div>
              <div className="">{profile.gender.gender_option}</div>
              <div className="">Age : 23</div>
              <div className="">8 Bisopher Dr.</div>
              <div className="">{profile.hometown.name}</div>
              <div className="">{profile.relationship.status}</div>
            </div>
          </div>
          <div className="genH border genHH">
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-12 p-0 float-left">
          <div className="genH border genHH">
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
