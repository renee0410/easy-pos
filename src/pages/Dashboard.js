import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React, { useState } from 'react';
import Calendar from 'moedim';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: ['蛋餅', '漢堡', '吐司', '點心', '鐵板麵', '沙拉', '飲料'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function Dashboard() {
  const [value, setValue] = useState(new Date())
  return (
    <div className=" dashboard container">
      {/* 數字區塊 */}
      <div className="dashboardTop">
        <div className="calendar">
        <Calendar value={value} onChange={(d) => setValue(d)} className='calenderStyle'/>
        </div>
        <div className="dataNumArea">
          {/* 訂單數量 */}
          <div className="orderQuantity">
            <h2 className="text">訂單總數</h2>
            <h2>1,234</h2>
          </div>
          {/* 營業額 */}
          <div className="revenue">
            <h2 className="text">營業額</h2>
            <h2 className="num">NT$123,456</h2>
          </div>
        </div>
        <div className="doughnutArea">
          <Doughnut data={data} />
        </div>
      </div>
      <div className="chartArea">
        <div className="verticalBarArea">
          {/* <Doughnut data={data} /> */}
        </div>
      </div>
    </div>
  )
}